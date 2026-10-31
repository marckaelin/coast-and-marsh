'use client';
import { useState } from 'react';
import { trackLead } from '../lib/analytics';

// The request is saved by the outbound project, which holds the database credentials.
// Keep these choices in sync with app/api/leads/contractor/route.ts in the nextjs-boilerplate repo.
const LEAD_ENDPOINT = 'https://www.coastandmarshinsurance.com/api/leads/contractor';
const TRADES = ['General Contractor', 'Building & Residential', 'Electrical', 'HVAC & Mechanical', 'Plumbing', 'Roofing', 'Painting', 'Flooring & Tile', 'Carpentry & Framing', 'Pressure Washing / Cleaning', 'Landscaping / Lawn', 'Other specialty trade'];
const WORK = ['Residential', 'Commercial', 'Both'];
const EMPLOYEES = ['Just me', '2-5', '6-15', '16-50', 'Over 50'];
const COVERAGES = ['General Liability', "Workers' Comp", 'Commercial Auto', 'Tools & Equipment', 'Umbrella / Excess', 'Builders Risk', 'Not sure'];
const CONSENT = 'I agree that Coast & Marsh Insurance Advisory may contact me by email and phone about this request. I understand this form does not bind coverage.';
const TEXT_CONSENT = 'Optional: Coast & Marsh may also text me at the number above about this request. Message and data rates may apply. Reply STOP to opt out. Consent is not required to get a quote.';

export default function QuoteForm({ defaultTrade = '' }) {
  const [form, setForm] = useState({ trade: TRADES.includes(defaultTrade) ? defaultTrade : '', work: '', employees: '', county: '', coverages: [], carrier: '', renewal: '', business: '', name: '', email: '', phone: '', message: '', consent: false, textConsent: false, website: '' });
  const [state, setState] = useState('idle');
  const [err, setErr] = useState('');
  const [opened] = useState(() => Date.now());
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  const toggle = (c) => setForm({ ...form, coverages: form.coverages.includes(c) ? form.coverages.filter((x) => x !== c) : [...form.coverages, c] });

  async function submit(e) {
    e.preventDefault();
    setState('sending'); setErr('');
    try {
      const r = await fetch(LEAD_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, consentText: form.textConsent ? `${CONSENT} ${TEXT_CONSENT}` : CONSENT, elapsedMs: Date.now() - opened }) });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || 'Something went wrong. Please try again.');
      setState('done');
      trackLead('contractor_quote', { trade: form.trade, coverages: form.coverages.join(', ') });
    } catch (x) { setErr(x instanceof Error ? x.message : 'Something went wrong.'); setState('error'); }
  }

  if (state === 'done') return <div className="review-card"><h3>Thanks, we have it.</h3><p className="yc-done">We&apos;ll review your details and reach out, usually within one business day. If your renewal is close, call 904-988-5026. Nothing is bound or in force until you receive written confirmation of coverage.</p></div>;

  return <form className="review-card cq-form" onSubmit={submit}>
    <h3>Request my insurance review</h3>
    <p className="yc-note">Two minutes. No long application to start.</p>
    <div className="yc-grid">
      <label className="yc-label">Your trade<select required value={form.trade} onChange={set('trade')}><option value="">Choose one</option>{TRADES.map((t) => <option key={t}>{t}</option>)}</select></label>
      <label className="yc-label">Florida county<input required maxLength={80} value={form.county} onChange={set('county')} placeholder="e.g. St. Johns" /></label>
      <label className="yc-label">Type of work<select value={form.work} onChange={set('work')}><option value="">Choose one</option>{WORK.map((t) => <option key={t}>{t}</option>)}</select></label>
      <label className="yc-label">Employees<select value={form.employees} onChange={set('employees')}><option value="">Choose one</option>{EMPLOYEES.map((t) => <option key={t}>{t}</option>)}</select></label>
      <fieldset className="cq-coverages yc-full"><legend className="yc-label">Coverage you need</legend>{COVERAGES.map((c) => <label key={c}><input type="checkbox" checked={form.coverages.includes(c)} onChange={() => toggle(c)} />{c}</label>)}</fieldset>
      <label className="yc-label">Current carrier (optional)<input maxLength={120} value={form.carrier} onChange={set('carrier')} /></label>
      <label className="yc-label">Renewal month (optional)<input maxLength={40} value={form.renewal} onChange={set('renewal')} placeholder="e.g. March 2027" /></label>
      <label className="yc-label">Business name<input maxLength={160} value={form.business} onChange={set('business')} autoComplete="organization" /></label>
      <label className="yc-label">Your name<input required maxLength={120} value={form.name} onChange={set('name')} autoComplete="name" /></label>
      <label className="yc-label">Email<input required type="email" maxLength={200} value={form.email} onChange={set('email')} autoComplete="email" /></label>
      <label className="yc-label">Phone<input type="tel" maxLength={40} value={form.phone} onChange={set('phone')} autoComplete="tel" /></label>
      <label className="yc-label yc-full">Anything else? (what you do, claims, contract requirements)<textarea rows={3} maxLength={1500} value={form.message} onChange={set('message')} /></label>
      <div aria-hidden="true" className="yc-hp"><label>Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} /></label></div>
      <label className="yc-consent yc-full"><input type="checkbox" required checked={form.consent} onChange={set('consent')} /><span>{CONSENT}</span></label>
      {form.phone && <label className="yc-consent yc-full"><input type="checkbox" checked={form.textConsent} onChange={set('textConsent')} /><span>{TEXT_CONSENT}</span></label>}
      {state === 'error' && <p className="yc-error yc-full" role="alert">{err}</p>}
      <div className="yc-full"><button className="button olive yc-submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Request my insurance review →'}</button></div>
    </div>
    <a className="review-phone" href="tel:+19049885026">Or call 904-988-5026</a>
  </form>;
}
