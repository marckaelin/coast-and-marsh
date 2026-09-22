'use client';

import { useRef, useState } from 'react';

const initialMessages = [
  {from:'assistant',text:"Hi — I'm the Coast & Marsh Coverage Assistant. I can help organize the information we need to understand your smoke shop before a human coverage review. This is a preliminary assessment, not a quote or coverage determination."},
  {from:'assistant',text:"First, where is your shop located? A ZIP code is perfect."}
];

export default function SmokeShopPOC() {
  const [started,setStarted]=useState(false);
  const [input,setInput]=useState('');
  const [messages,setMessages]=useState([]);
  const [stage,setStage]=useState('intake');
  const [summary,setSummary]=useState({});
  const [assessment,setAssessment]=useState('');
  const [loading,setLoading]=useState(false);\n  const sessionId=useRef(null);

  function start(){
    setStarted(true);
    setMessages(initialMessages);
  }

  async function send(){
    const value=input.trim();
    if(!value || loading) return;

    const next=[...messages,{from:'user',text:value}];
    setMessages(next);
    setInput('');
    setLoading(true);

    try {
      const res=await fetch('/api/smoke-shop-chat',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({messages:next,sessionId:sessionId.current})
      });
      const data=await res.json();
      if(!res.ok) throw new Error(data.message || 'AI unavailable');

      setMessages([...next,{from:'assistant',text:data.message}]);
      setStage(data.stage || 'intake');
      setSummary(data.summary || {});
      setAssessment(data.assessment || '');
    } catch (e) {
      setMessages([...next,{from:'assistant',text:"I hit a temporary problem processing that. Please try again, or call Coast & Marsh at 904-988-5028."}]);
    } finally {
      setLoading(false);
    }
  }

  return <main className="smoke-page">
    <header className="smoke-header"><a className="logo" href="/"><span className="logo-mark">≋</span><span className="logo-copy"><strong>COAST &amp; MARSH</strong><small>INSURANCE ADVISORY</small></span></a><a className="smoke-phone" href="tel:+19049885028">904-988-5028</a></header>
    <section className="smoke-hero">
      <div className="smoke-copy"><p className="eyebrow">SMOKE SHOP INSURANCE</p><h1>Skip the long application.<br/>Start with a conversation.</h1><p>What you sell can change which insurance markets will consider your shop. Tell our Coverage Assistant about your business and get a preliminary assessment in about 60 seconds.</p><div className="trust-row"><span>No lengthy forms</span><span>AI-guided intake</span><span>Human coverage review</span></div></div>
      <div className="chat-card">
        {!started ? <div className="chat-start"><div className="assistant-badge">C&amp;M</div><h2>Can we help review your shop?</h2><p>Answer a few questions in plain English. The assistant will adapt its follow-up questions to your business and organize the information for a coverage review.</p><button onClick={start}>Start the 60-second assessment <b>→</b></button><small>Not a quote, binder, underwriting decision, or guarantee of coverage.</small></div> :
        <><div className="chat-top"><div className="assistant-badge">C&amp;M</div><div><strong>Coverage Assistant</strong><small>{stage==='meeting_ready'?'READY TO SCHEDULE':stage==='meeting'?'SCHEDULING REVIEW':'AI-GUIDED INTAKE'}</small></div></div>
        <div className="chat-messages">{messages.map((m,i)=><div key={i} className={'bubble '+m.from}>{m.text}</div>)}{loading&&<div className="bubble assistant thinking">Thinking…</div>}</div>
        {stage!=='meeting_ready'&&<div className="chat-input"><textarea value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send()}}} placeholder={stage==='meeting'?'Name, email, mobile and a good day/time...':'Type your answer in plain English...'} disabled={loading}/><button onClick={send} aria-label="Send" disabled={loading}>→</button></div>}
        {stage==='meeting_ready'&&<div className="meeting-cta"><strong>Coverage review requested</strong><p>Your information and requested meeting time have been saved. Coast &amp; Marsh will follow up to confirm your 15-minute coverage review.</p><small>Need us sooner? Call <a href="tel:+19049885028">904-988-5028</a>.</small></div>}
        <div className="progress"><span style={{width: stage==='meeting_ready'?'100%':stage==='meeting'?'82%':'48%'}}/></div></>}
      </div>
    </section>
    <section className="smoke-why"><p className="eyebrow">WHY WE ASK</p><h2>Smoke shops aren't all the same risk.</h2><p>A shop selling traditional tobacco and accessories can look very different to an insurer than one selling vape, CBD, hemp-derived THC, kratom, imported products or private-label products. Our assistant adapts the conversation to the operation, then organizes the details for a human coverage review.</p></section>
    <footer><div className="logo-copy"><strong>COAST &amp; MARSH</strong><small>INSURANCE ADVISORY</small></div><div>Preliminary assessment only. Coverage subject to carrier underwriting and eligibility.</div><div className="legal"><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></footer>
  </main>
}