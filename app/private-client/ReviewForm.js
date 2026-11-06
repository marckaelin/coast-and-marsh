'use client';
import { useEffect, useState } from 'react';
import { trackLead } from '../lib/analytics';

// The request is saved by the outbound project, which holds the database credentials.
// Keep these choices in sync with app/api/leads/private-client/route.ts in the nextjs-boilerplate repo.
const LEAD_ENDPOINT = 'https://www.coastandmarshinsurance.com/api/leads/private-client';
const SETTINGS = ['Oceanfront', 'Intracoastal or other waterfront', 'Golf or club community', 'Inland', 'More than one home'];
const VALUES = ['Under $1M', '$1M-$2M', '$2M-$5M', '$5M-$10M', 'Over $10M', 'Not sure'];
const ITEMS = ['Primary home', 'Second or seasonal home', 'Flood', 'Boat or yacht', 'Jewelry and watches', 'Fine art, wine or collectibles', 'Golf cart', 'Autos', 'Umbrella', 'Parties and events at home'];
const CONSENT = 'I agree that Coast & Marsh Insurance Advisory may contact me by email and phone about this request. I understand this form does not bind coverage.';
const TEXT_CONSENT = 'Optional: Coast & Marsh may also text me at the number above about this request. Message and data rates may apply. Reply STOP to opt out. Consent is not required.';

export default function ReviewForm() {
  const [form, setForm] = useState({ area: '', setting: '', value: '', items: [], renewal: '', heard: '', name: '', email: '', phone: '', message: '', consent: false, textConsent: false, website: '' });
  const [state, setState] = useState('idle');
  const [err, setErr] = useState('');
  const [opened] = useState(() => Date.now());
  const [utmSource, setUtmSource] = useState('');
  useEffect(() => { try { setUtmSource(new URLSearchParams(window.location.search).get('utm_source') || ''); } catch {} }, []);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  const toggle = (c) => setForm({ ...form, items: form.items.includes(c) ? form.items.filter((x) => x !== c) : [...form.items, c] });

  async function submit(e) {
    e.preventDefault();
    setState('sending'); setErr('');
    try {
      const r = await fetch(LEAD_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, utmSource, consentText: form.textConsent ? `${CONSENT} ${TEXT_CONSENT}` : CONSENT, elapsedMs: Date.now() - opened }) });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || 'Something went wrong. Please try again.');
      setState('done');
      trackLead('private_client_review', { home_value: form.value, items: form.items.join(', ') });
    } catch (x) { setErr(x instanceof Error ? x.message : 'Something went wrong.'); setState('error'); }
  }

  if (state === 'done') return <div className="review-card"><h3>Thank you. Marc has your request.</h3><p className="yc-done">He&apos;ll reply by email, usually within one business day, with a few questions and how to share your current policies. Nothing is bound or in force until you receive written confirmation of coverage.</p></div>;

  return <form className="review-card cq-form" onSubmit={submit}>
    <h3>Request a Coastal Coverage Review</h3>
    <p className="yc-note">Two minutes. No application, and no policy documents needed to start.</p>
    <div className="yc-grid">
      <label className="yc-label">City or community<input required maxLength={80} value={form.area} onChange={set('area')} placeholder="e.g. Ponte Vedra Beach" /></label>
      <label className="yc-label">Your home&apos;s setting<select value={form.setting} onChange={set('setting')}><option value="">Choose one</option>{SETTINGS.map((t) => <option key={t}>{t}</option>)}</select></label>
      <label className="yc-label">Approximate home value<select value={form.value} onChange={set('value')}><option value="">Choose one</option>{VALUES.map((t) => <option key={t}>{t}</option>)}</select></label>
      <label className="yc-label">Renewal month (optional)<input maxLength={40} value={form.renewal} onChange={set('renewal')} placeholder="e.g. March" /></label>
      <fieldset className="cq-coverages yc-full"><legend className="yc-label">What should we look at?</legend>{ITEMS.map((c) => <label key={c}><input type="checkbox" checked={form.items.includes(c)} onChange={() => toggle(c)} />{c}</label>)}</fieldset>
      <label className="yc-label">Your name<input required maxLength={120} value={form.name} onChange={set('name')} autoComplete="name" /></label>
      <label className="yc-label">Email<input required type="email" maxLength={200} value={form.email} onChange={set('email')} autoComplete="email" /></label>
      <label className="yc-label">Phone (optional)<input type="tel" maxLength={40} value={form.phone} onChange={set('phone')} autoComplete="tel" /></label>
      <label className="yc-label">How did you hear about us? (optional)<input maxLength={120} value={form.heard} onChange={set('heard')} placeholder="e.g. Instagram, a friend, Google" /></label>
      <label className="yc-label yc-full">Anything we should know? (a recent purchase, a renovation, a policy that was non-renewed)<textarea rows={3} maxLength={1500} value={form.message} onChange={set('message')} /></label>
      <div aria-hidden="true" className="yc-hp"><label>Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} /></label></div>
      <label className="yc-consent yc-full"><input type="checkbox" required checked={form.consent} onChange={set('consent')} /><span>{CONSENT}</span></label>
      {form.phone && <label className="yc-consent yc-full"><input type="checkbox" checked={form.textConsent} onChange={set('textConsent')} /><span>{TEXT_CONSENT}</span></label>}
      {state === 'error' && <p className="yc-error yc-full" role="alert">{err}</p>}
      <div className="yc-full"><button className="button olive yc-submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Request my review →'}</button></div>
    </div>
    <a className="review-phone" href="tel:+19049885026">Or call or text 904-988-5026</a>
    <p style={{ display: 'block', fontSize: 14, lineHeight: 1.5, margin: '12px 0 0', textAlign: 'center' }}>Prefer email? Write to <a href="mailto:marc.kaelin@coastandmarsh.com?subject=Coastal%20coverage%20review">marc.kaelin@coastandmarsh.com</a>.</p>
  </form>;
}
