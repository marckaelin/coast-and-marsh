'use client';

import { useRef, useState } from 'react';

const initialMessages = [
  {from:'assistant',text:"Hi — I'm the Coast & Marsh Coverage Assistant. I'll ask a few questions about your business and the products you sell so we can determine which insurance markets may be worth exploring. This is a preliminary assessment, not a quote or coverage determination."},
  {from:'assistant',text:"What does your business sell? For example: tobacco or vape products, Delta-8/Delta-9, kratom, CBD/hemp, or something else."}
];

export default function SmokeShopPOC() {
  const [started,setStarted]=useState(false);
  const [input,setInput]=useState('');
  const [messages,setMessages]=useState([]);
  const [stage,setStage]=useState('intake');
  const [summary,setSummary]=useState({});
  const [assessment,setAssessment]=useState('');
  const [loading,setLoading]=useState(false);
  const sessionId=useRef(null);

  function start(){
    sessionId.current=crypto.randomUUID();
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
      <div className="smoke-copy"><p className="eyebrow">SMOKE SHOP INSURANCE</p><h1>Insurance for shops selling <em>Delta-8, Delta-9, Kratom &amp; Hemp.</em></h1><p>Some products can make ordinary business insurance difficult to place. Coast &amp; Marsh helps regulated-market businesses organize the details specialty insurance markets need to evaluate more complex risks.</p><div className="specialty-callout"><strong>Selling Delta-8, Delta-9, Kratom, CBD or Hemp?</strong><span>Tell our Coverage Assistant what you sell. In about 60 seconds, we'll gather the information needed for a human coverage review.</span></div><div className="trust-row"><span>Specialty-market focus</span><span>No long application</span><span>Human review</span></div></div>
      <div className="chat-card">
        {!started ? <div className="chat-start"><div className="assistant-badge">C&amp;M</div><h2>Tell us what you sell.</h2><p>Delta-8, Delta-9, kratom, CBD, hemp, vape and tobacco products can create very different insurance considerations. Answer a few questions in plain English and we'll organize the details for a human coverage review.</p><button onClick={start}>Start my coverage review <b>→</b></button><small>Not a quote, binder, underwriting decision, or guarantee of coverage.</small></div> :
        <><div className="chat-top"><div className="assistant-badge">C&amp;M</div><div><strong>Coverage Assistant</strong><small>{stage==='meeting_ready'?'READY TO SCHEDULE':stage==='meeting'?'SCHEDULING REVIEW':'AI-GUIDED INTAKE'}</small></div></div>
        <div className="chat-messages">{messages.map((m,i)=><div key={i} className={'bubble '+m.from}>{m.text}</div>)}{loading&&<div className="bubble assistant thinking">Thinking…</div>}</div>
        {stage!=='meeting_ready'&&<div className="chat-input"><textarea value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send()}}} placeholder={stage==='meeting'?'Name, email, mobile and a good day/time...':'Type your answer in plain English...'} disabled={loading}/><button onClick={send} aria-label="Send" disabled={loading}>→</button></div>}
        {stage==='meeting_ready'&&<div className="meeting-cta"><strong>Coverage review requested</strong><p>Your information and requested meeting time have been saved. Coast &amp; Marsh will follow up to confirm your 15-minute coverage review.</p><small>Need us sooner? Call <a href="tel:+19049885028">904-988-5028</a>.</small></div>}
        <div className="progress"><span style={{width: stage==='meeting_ready'?'100%':stage==='meeting'?'82%':'48%'}}/></div></>}
      </div>
    </section>
    <section className="smoke-why"><p className="eyebrow">WHY COAST &amp; MARSH</p><h2>Complex products need a more focused insurance conversation.</h2><p>A tobacco retailer can look very different to an insurer than a business selling Delta-8, Delta-9, kratom, CBD, hemp-derived products, imported products or private-label brands. We focus the intake on those differences, organize the underwriting details, and have a human review every qualified submission.</p><div className="specialty-points"><span>Specialty-market access</span><span>Regulated-industry focus</span><span>Human review</span><span>Fast conversational intake</span></div></section>
    <footer><div className="logo-copy"><strong>COAST &amp; MARSH</strong><small>INSURANCE ADVISORY</small></div><div>Preliminary assessment only. Coverage subject to carrier underwriting and eligibility.</div><div className="legal"><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></footer>
  </main>
}