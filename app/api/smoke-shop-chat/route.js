export const runtime = 'nodejs';

const SYSTEM = `
You are the Coast & Marsh Insurance Advisory Smoke Shop Coverage Assistant.
Conduct a short, natural-language preliminary intake and move a viable prospect toward a 15-minute human coverage review.
You are NOT an underwriter. Never say coverage is approved, available, guaranteed, bound, or that a carrier will accept the risk.
Ask ONE concise question at a time. Use prior answers and never repeat answered questions. Prefer plain English.
Before moving to a meeting, understand: shop ZIP/location; products sold; approximate product mix where relevant; kratom; manufacturing/importing/private-label/own-brand; approximate annual revenue; coverage need; current insurance and renewal timing.
When sufficiently clear, say "Let's get a 15-minute coverage review on the calendar." Ask for name, email, mobile number, and preferred day/time in one message.
After those are supplied, return stage "meeting_ready", a concise preliminary assessment and structured summary. Tell them: "Great — your request is saved. Coast & Marsh will follow up to confirm your 15-minute coverage review."
Return ONLY valid JSON:
{"message":"","stage":"intake|meeting|meeting_ready","assessment":"","summary":{"location":"","products":"","productMix":"","specialExposures":"","annualRevenue":"","coverageNeed":"","currentCoverage":"","renewalTiming":"","name":"","email":"","phone":"","preferredMeetingTime":""}}
`;

async function saveLead(sessionId, messages, data) {
  const url=process.env.SUPABASE_URL;
  const key=process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ROLE_KEY;
  if(!url || !key) throw new Error('Supabase server credentials are not configured');

  const s=data.summary || {};
  const body={
    session_id:sessionId,
    source:'smoke_shop_landing_page',
    status:data.stage==='meeting_ready'?'meeting_requested':'intake',
    location:s.location || null,
    products:s.products || null,
    product_mix:s.productMix || null,
    special_exposures:s.specialExposures || null,
    annual_revenue:s.annualRevenue || null,
    coverage_need:s.coverageNeed || null,
    current_coverage:s.currentCoverage || null,
    renewal_timing:s.renewalTiming || null,
    contact_name:s.name || null,
    email:s.email || null,
    phone:s.phone || null,
    preferred_meeting_time:s.preferredMeetingTime || null,
    assessment:data.assessment || null,
    transcript:messages,
    last_activity_at:new Date().toISOString(),
    meeting_requested_at:data.stage==='meeting_ready'?new Date().toISOString():null,
    metadata:{landing_page:'/smoke-shop-insurance',assistant:'openai'}
  };

  const res=await fetch(`${url}/rest/v1/web_intake_leads?on_conflict=session_id`,{
    method:'POST',
    headers:{
      apikey:key,
      Authorization:`Bearer ${key}`,
      'Content-Type':'application/json',
      Prefer:'resolution=merge-duplicates,return=minimal'
    },
    body:JSON.stringify(body)
  });
  if(!res.ok) throw new Error(`Supabase save failed ${res.status}: ${(await res.text()).slice(0,300)}`);
}

export async function POST(request) {
  try {
    if(!process.env.OPENAI_API_KEY) throw new Error('OPENAI_API_KEY is not configured');
    const {messages=[],sessionId}=await request.json();
    if(!sessionId) throw new Error('sessionId is required');

    const transcript=messages.slice(-24).map(m=>`${m.from==='assistant'?'ASSISTANT':'PROSPECT'}: ${m.text}`).join('\n');
    const response=await fetch('https://api.openai.com/v1/responses',{
      method:'POST',
      headers:{Authorization:`Bearer ${process.env.OPENAI_API_KEY}`,'Content-Type':'application/json'},
      body:JSON.stringify({model:'gpt-5.6-luna',reasoning:{effort:'low'},instructions:SYSTEM,input:`Continue this intake. Infer structured facts only when supplied.\n\n${transcript}`,max_output_tokens:1200})
    });
    if(!response.ok) throw new Error(`OpenAI API error ${response.status}: ${(await response.text()).slice(0,500)}`);
    const result=await response.json();
    const text=result.output_text || result.output?.flatMap(i=>i.content||[]).find(i=>i.type==='output_text')?.text;
    if(!text) throw new Error('OpenAI returned no text');
    const data=JSON.parse(text.replace(/^\`\`\`json\s*/i,'').replace(/\`\`\`$/i,'').trim());
    const completedMessages=[...messages,{from:'assistant',text:data.message}];
    await saveLead(sessionId,completedMessages,data);
    return Response.json(data);
  } catch(error) {
    console.error('Smoke shop AI intake error',error);
    return Response.json({error:'ai_unavailable',message:'I hit a temporary problem. Please try that answer again in a moment.'},{status:500});
  }
}
