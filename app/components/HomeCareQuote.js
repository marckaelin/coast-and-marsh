'use client';
import { useEffect, useState } from 'react';
import { trackLead } from '../lib/analytics';
import { HOME_CARE_OPTIONS, CAREGIVERS, REVENUE } from '../lib/home-care-requirements';

// Three-step quote flow for home care agencies: pick a franchise brand or "independent",
// see the insurance requirements, then send a few optional numbers plus an email or phone.
// Saved by the outbound project, which holds the database credentials.
// Keep the choices in sync with app/api/leads/home-care/route.ts in the nextjs-boilerplate repo.
const LEAD_ENDPOINT = 'https://www.coastandmarshinsurance.com/api/leads/home-care';
const CONSENT_EMAIL = 'I agree that Coast & Marsh Insurance Advisory may contact me by email about this request. I understand this form does not bind coverage.';
const CONSENT_TEXT = 'I agree that Coast & Marsh Insurance Advisory may call or text me at this number about this request. Message and data rates may apply. Reply STOP to opt out. I understand this form does not bind coverage.';

export default function HomeCareQuote() {
  const [step, setStep] = useState(1);
  const [choice, setChoice] = useState(null);
  const [form, setForm] = useState({ brandOther: '', caregivers: '', revenue: '', name: '', business: '', method: 'email', email: '', phone: '', consent: false, website: '' });
  const [state, setState] = useState('idle');
  const [err, setErr] = useState('');
  const [opened] = useState(() => Date.now());
  const [utmSource, setUtmSource] = useState('');
  useEffect(() => { try { setUtmSource(new URLSearchParams(window.location.search).get('utm_source') || ''); } catch {} }, []);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  const opt = HOME_CARE_OPTIONS.find((o) => o.id === choice);
  const go = (n) => { setStep(n); try { document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch {} };

  async function submit(e) {
    e.preventDefault();
    setState('sending'); setErr('');
    try {
      const body = { ...form, brand: choice, consentText: form.method === 'text' ? CONSENT_TEXT : CONSENT_EMAIL, utmSource, elapsedMs: Date.now() - opened };
      const r = await fetch(LEAD_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || 'Something went wrong. Please try again.');
      setState('done');
      trackLead('home_care_quote', { brand: choice, caregivers: form.caregivers, revenue: form.revenue, contact_method: form.method });
    } catch (x) { setErr(x instanceof Error ? x.message : 'Something went wrong.'); setState('error'); }
  }

  return <section className="hcq" id="quote" aria-labelledby="hcq-title">
    <div className="hcq-card">
      <p className="hcq-steps" aria-label={`Step ${step} of 3`}>{['Your agency', 'Requirements', 'Send'].map((s, i) => <span key={s} className={i + 1 === step ? 'on' : i + 1 < step ? 'done' : ''}>{i + 1}. {s}</span>)}</p>

      {state === 'done' ? <div>
        <h2 id="hcq-title">Thanks, Marc has it.</h2>
        <p className="yc-done">He&apos;ll come back {form.method === 'text' ? 'by text' : 'by email'} with an indication built to {opt?.id === 'independent' ? 'our recommended package' : 'your franchise requirements'}, plus any questions. Nothing is bound or in force until you receive written confirmation of coverage.</p>
      </div> : step === 1 ? <div>
        <h2 id="hcq-title">Get your quote</h2>
        <p className="hcq-sub">Are you a franchise or an independent agency?</p>
        <div className="hcq-choices">
          {HOME_CARE_OPTIONS.map((o) => <button type="button" key={o.id} className={`hcq-choice${choice === o.id ? ' on' : ''}`} onClick={() => { setChoice(o.id); go(2); }}>
            <strong>{o.label}</strong>{o.hint && <span>{o.hint}</span>}
          </button>)}
        </div>
      </div> : step === 2 && opt ? <div>
        <h2 id="hcq-title">{opt.id === 'independent' ? 'Our recommended package' : opt.id === 'other-franchise' ? 'Typical franchise requirements' : `${opt.label} insurance requirements`}</h2>
        {opt.intro && <p className="hcq-sub">{opt.intro}</p>}
        <dl className="hcq-reqs">{opt.lines.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
        {opt.fine.length > 0 && <ul className="hcq-fine">{opt.fine.map((f) => <li key={f}>{f}</li>)}</ul>}
        <p className="hcq-src">Source: {opt.source}. {opt.id === 'independent' ? '' : 'Your signed agreement and operations manual control. '}Coast &amp; Marsh is not affiliated with or endorsed by any franchisor.</p>
        <div className="hcq-nav"><button type="button" className="hcq-back" onClick={() => go(1)}>← Back</button><button type="button" className="button olive yc-submit" onClick={() => go(3)}>Quote this for me →</button></div>
      </div> : <form onSubmit={submit}>
        <h2 id="hcq-title">Where should we send it?</h2>
        <p className="hcq-sub">The numbers are optional, but they make the first indication closer. You can skip them.</p>
        <div className="yc-grid">
          {choice === 'other-franchise' && <label className="yc-label yc-full">Franchise brand (optional)<input maxLength={80} value={form.brandOther} onChange={set('brandOther')} /></label>}
          <label className="yc-label">Caregivers (optional)<select value={form.caregivers} onChange={set('caregivers')}><option value="">Choose one</option>{CAREGIVERS.map((t) => <option key={t}>{t}</option>)}</select></label>
          <label className="yc-label">Annual revenue (optional)<select value={form.revenue} onChange={set('revenue')}><option value="">Choose one</option>{REVENUE.map((t) => <option key={t}>{t}</option>)}</select></label>
          <label className="yc-label">Your name<input required maxLength={120} value={form.name} onChange={set('name')} autoComplete="name" /></label>
          <label className="yc-label">Agency name (optional)<input maxLength={160} value={form.business} onChange={set('business')} autoComplete="organization" /></label>
          <fieldset className="hcq-method yc-full"><legend className="yc-label">Send my quote by</legend>
            {[['email', 'Email'], ['text', 'Text']].map(([v, l]) => <label key={v} className={form.method === v ? 'on' : ''}><input type="radio" name="method" value={v} checked={form.method === v} onChange={() => setForm({ ...form, method: v, consent: false })} />{l}</label>)}
          </fieldset>
          {form.method === 'email'
            ? <label className="yc-label yc-full">Email<input required type="email" maxLength={200} value={form.email} onChange={set('email')} autoComplete="email" /></label>
            : <label className="yc-label yc-full">Mobile number<input required type="tel" maxLength={40} value={form.phone} onChange={set('phone')} autoComplete="tel" /></label>}
          <div aria-hidden="true" className="yc-hp"><label>Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} /></label></div>
          <label className="yc-consent yc-full"><input type="checkbox" required checked={form.consent} onChange={set('consent')} /><span>{form.method === 'text' ? CONSENT_TEXT : CONSENT_EMAIL}</span></label>
          {state === 'error' && <p className="yc-error yc-full" role="alert">{err}</p>}
          <div className="hcq-nav yc-full"><button type="button" className="hcq-back" onClick={() => go(2)}>← Back</button><button className="button olive yc-submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Get my quote →'}</button></div>
        </div>
      </form>}
      <p className="hcq-alt">Or call or text <a href="tel:+19049885026">904-988-5026</a>, or email <a href="mailto:marc.kaelin@coastandmarsh.com?subject=Home%20care%20agency%20insurance%20quote">marc.kaelin@coastandmarsh.com</a>.</p>
    </div>
  </section>;
}
