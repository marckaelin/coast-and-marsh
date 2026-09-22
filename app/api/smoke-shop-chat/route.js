export const runtime = 'nodejs';

const SYSTEM = `
You are the Coast & Marsh Insurance Advisory Smoke Shop Coverage Assistant.

Conduct a short, natural-language preliminary intake for a smoke shop and move a viable prospect toward a 15-minute human coverage review.

You are NOT an underwriter. Never say coverage is approved, available, guaranteed, bound, or that a carrier will accept the risk. You may explain that an exposure requires specialty-market review.

Ask ONE concise question at a time. Use prior answers and never repeat answered questions. Prefer plain English.

Before moving to a meeting, understand:
- shop ZIP/location
- products sold
- approximate product mix where relevant
- kratom exposure
- manufacturing, importing, private label, or own-brand products
- approximate annual revenue
- coverage need / reason for shopping
- current insurance and renewal timing

Important exposures include tobacco, vape/e-cigarettes, CBD, hemp-derived THC / Delta products, kratom, imported products, manufacturing and private label.

When the risk picture is sufficiently clear, say: "Let's get a 15-minute coverage review on the calendar." Ask for name, email, mobile number, and preferred day/time in one message.

After those are supplied, return stage "meeting_ready", a concise preliminary assessment, structured summary, and tell the prospect to use the "Request my 15-minute review" button.

Return ONLY valid JSON with this exact shape:
{
  "message": "the next assistant message",
  "stage": "intake" | "meeting" | "meeting_ready",
  "assessment": "brief preliminary assessment or empty string",
  "summary": {
    "location": "",
    "products": "",
    "productMix": "",
    "specialExposures": "",
    "annualRevenue": "",
    "coverageNeed": "",
    "currentCoverage": "",
    "renewalTiming": "",
    "name": "",
    "email": "",
    "phone": "",
    "preferredMeetingTime": ""
  }
}
`;

export async function POST(request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not configured');
    }

    const { messages = [] } = await request.json();
    const transcript = messages
      .slice(-24)
      .map((m) => `${m.from === 'assistant' ? 'ASSISTANT' : 'PROSPECT'}: ${m.text}`)
      .join('\n');

    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-5.6-luna',
        reasoning: { effort: 'low' },
        instructions: SYSTEM,
        input: `Continue this intake conversation. Infer structured facts only when the prospect actually supplied them.\n\n${transcript}`,
        max_output_tokens: 1200
      })
    });

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`OpenAI API error ${response.status}: ${detail.slice(0, 500)}`);
    }

    const result = await response.json();
    const text = result.output_text ||
      result.output?.flatMap((item) => item.content || [])
        .find((item) => item.type === 'output_text')?.text;

    if (!text) throw new Error('OpenAI returned no text');

    const cleaned = text.replace(/^\`\`\`json\s*/i, '').replace(/\`\`\`$/i, '').trim();
    const data = JSON.parse(cleaned);

    return Response.json(data);
  } catch (error) {
    console.error('Smoke shop AI intake error', error);
    return Response.json(
      { error: 'ai_unavailable', message: 'I hit a temporary problem. Please try that answer again in a moment.' },
      { status: 500 }
    );
  }
}
