'use client';

import { useState } from 'react';

const steps = [
  { key: 'zip', ask: "First, what's the ZIP code for your shop?", placeholder: 'e.g. 32256' },
  { key: 'products', ask: "Tell me what you sell. You can answer normally — for example, “mostly vape and tobacco, plus some CBD and Delta-8.”", placeholder: 'Describe your product mix...' },
  { key: 'mix', ask: "Roughly what percentage of sales comes from vape, CBD/hemp-derived THC, or other specialty products? Estimates are fine.", placeholder: 'e.g. 40% vape, 10% Delta-8...' },
  { key: 'kratom', ask: "Do you sell kratom, manufacture products, import products, or sell anything under your own brand?", placeholder: 'Yes / no, with a little detail...' },
  { key: 'revenue', ask: "About how much does the store sell annually? A range is fine.", placeholder: 'e.g. about $750,000' },
  { key: 'coverage', ask: "What are you trying to insure? If you're not sure, just tell me what prompted you to look for coverage.", placeholder: 'e.g. landlord requires insurance...' },
  { key: 'current', ask: "Do you currently have insurance? If so, when does it renew?", placeholder: 'e.g. Yes, renews November 1' },
];

function assess(answers) {
  const text = Object.values(answers).join(' ').toLowerCase();
  const review = /kratom|manufactur|private label|own brand|import/.test(text);
  const specialty = /delta|thc|hemp|cbd|vape/.test(text);
  if (review) return {title:'Your shop needs a specialty-market review.', body:'Some products or operations you mentioned can materially affect carrier eligibility. That does not mean coverage is unavailable — it means we should review the details before asking you to complete a full application.'};
  if (specialty) return {title:'Your shop appears appropriate for a specialty-market review.', body:'Your product mix includes exposures that standard business insurance may not address well. Coast & Marsh can review the information you provided and determine which available markets are worth pursuing.'};
  return {title:'Your shop appears ready for a coverage review.', body:'Based on what you told us, the next step is to match your operation and coverage needs with appropriate available markets.'};
}

export default function SmokeShopPOC() {
  const [started,setStarted]=useState(false);
  const [index,setIndex]=useState(0);
  const [input,setInput]=useState('');
  const [answers,setAnswers]=useState({});
  const [messages,setMessages]=useState([]);
  const [done,setDone]=useState(false);

  function start(){
    setStarted(true);
    setMessages([{from:'assistant',text:"Hi — I'm the Coast & Marsh Coverage Assistant. I can help organize the information we need to determine which insurance markets may fit your smoke shop. This is a preliminary assessment, not a quote or coverage determination."},{from:'assistant',text:steps[0].ask}]);
  }
  function send(){
    const value=input.trim(); if(!value) return;
    const step=steps[index]; const nextAnswers={...answers,[step.key]:value};
    const next=[...messages,{from:'user',text:value}]; setAnswers(nextAnswers); setInput('');
    if(index===steps.length-1){
      const a=assess(nextAnswers);
      setMessages([...next,{from:'assistant',text:a.title},{from:'assistant',text:a.body},{from:'assistant',text:"If you'd like Marc to review this, call 904-988-5028 or email marc.kaelin@coastandmarsh.com. For this POC, no information from this chat is being submitted or stored."}]);
      setDone(true); return;
    }
    const ni=index+1; setIndex(ni); setMessages([...next,{from:'assistant',text:steps[ni].ask}]);
  }
  return <main className="smoke-page">
    <header className="smoke-header"><a className="logo" href="/"><span className="logo-mark">≋</span><span className="logo-copy"><strong>COAST &amp; MARSH</strong><small>INSURANCE ADVISORY</small></span></a><a className="smoke-phone" href="tel:+19049885028">904-988-5028</a></header>
    <section className="smoke-hero">
      <div className="smoke-copy"><p className="eyebrow">SMOKE SHOP INSURANCE</p><h1>Skip the long application.<br/>Start with a conversation.</h1><p>What you sell can change which insurance markets will consider your shop. Tell our Coverage Assistant about your business and get a preliminary assessment in about 60 seconds.</p><div className="trust-row"><span>No lengthy forms</span><span>Specialty-market focused</span><span>Human review when needed</span></div></div>
      <div className="chat-card">
        {!started ? <div className="chat-start"><div className="assistant-badge">C&amp;M</div><h2>Can we help cover your shop?</h2><p>Answer a few questions in plain English. We'll organize the details needed for a preliminary coverage assessment.</p><button onClick={start}>Start the 60-second assessment <b>→</b></button><small>Not a quote, binder, or guarantee of coverage.</small></div> :
        <><div className="chat-top"><div className="assistant-badge">C&amp;M</div><div><strong>Coverage Assistant</strong><small>Smoke Shop POC</small></div></div><div className="chat-messages">{messages.map((m,i)=><div key={i} className={'bubble '+m.from}>{m.text}</div>)}</div>{!done&&<div className="chat-input"><textarea value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send()}}} placeholder={steps[index].placeholder}/><button onClick={send} aria-label="Send">→</button></div>}<div className="progress"><span style={{width: done?'100%':((index+1)/steps.length*100)+'%'}}/></div></>}
      </div>
    </section>
    <section className="smoke-why"><p className="eyebrow">WHY WE ASK</p><h2>Smoke shops aren't all the same risk.</h2><p>A shop selling traditional tobacco and accessories can look very different to an insurer than one selling vape, CBD, hemp-derived THC, kratom, imported products or private-label products. We ask about the business first so we can pursue the right next step.</p></section>
    <footer><div className="logo-copy"><strong>COAST &amp; MARSH</strong><small>INSURANCE ADVISORY</small></div><div>Preliminary assessment only. Coverage subject to carrier underwriting and eligibility.</div><div className="legal"><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></footer>
  </main>
}