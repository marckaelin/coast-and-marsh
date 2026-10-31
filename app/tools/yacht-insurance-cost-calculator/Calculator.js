'use client';
import { useMemo, useState } from 'react';
import { OPTIONS, estimate } from './model';
import { trackLead } from '../../lib/analytics';

// The quote request is saved by the outbound project, which holds the database credentials.
const LEAD_ENDPOINT = 'https://www.coastandmarshinsurance.com/api/leads/yacht';
const usd = (n) => '$' + Math.round(n).toLocaleString('en-US');
const DEFAULTS = { value: 250000, length: '26-40', type: 'motor', built: '2000-2014', use: 'private', storage: 'marina', zone: 'coastal', storm: 'plan', experience: '3-10', claims: 'none', coverage: 'hullLiab' };
const LABELS = { length: 'Length', type: 'Vessel type', built: 'Year built', use: 'How it is used', storage: 'Where it is kept', zone: 'Where you cruise', storm: 'Hurricane preparation', experience: 'Your boating experience', claims: 'Claims in the last 5 years', coverage: 'Coverage' };
const GROUPS = [
  { title: 'The vessel', keys: ['type', 'length', 'built'] },
  { title: 'Use and storage', keys: ['use', 'storage'] },
  { title: 'Where and how you boat', keys: ['zone', 'storm', 'experience', 'claims'] },
  { title: 'Coverage', keys: ['coverage'] }
];

export default function Calculator() {
  const [i, setI] = useState(DEFAULTS);
  const [valueText, setValueText] = useState('250,000');
  const est = useMemo(() => estimate(i), [i]);
  const [form, setForm] = useState({ name: '', email: '', phone: '', location: '', message: '', consent: false, website: '' });
  const [state, setState] = useState('idle');
  const [err, setErr] = useState('');
  const [opened] = useState(() => Date.now());
  const valid = i.value >= 5000;

  function setValue(t) {
    const digits = t.replace(/[^0-9]/g, '').slice(0, 9);
    setValueText(digits ? Number(digits).toLocaleString('en-US') : '');
    setI({ ...i, value: Number(digits) || 0 });
  }
  async function submit(e) {
    e.preventDefault();
    setState('sending'); setErr('');
    try {
      const r = await fetch(LEAD_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, inputs: i, elapsedMs: Date.now() - opened }) });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || 'Something went wrong. Please try again.');
      setState('done');
      trackLead('yacht_quote');
    } catch (x) { setErr(x instanceof Error ? x.message : 'Something went wrong.'); setState('error'); }
  }

  return <div className="yc-wrap">
    <div className="yc-main">
      <section className="yc-card">
        <h2>Insured value</h2>
        <label className="yc-label">What would you insure it for (agreed value)?
          <span className="yc-money"><b>$</b><input inputMode="numeric" value={valueText} onChange={(e) => setValue(e.target.value)} aria-describedby="yc-valnote" /></span>
        </label>
        <p id="yc-valnote" className="yc-note">{valid ? 'Between $5,000 and $50,000,000.' : 'Enter at least $5,000.'}</p>
      </section>
      {GROUPS.map((g) => <section key={g.title} className="yc-card">
        <h2>{g.title}</h2>
        <div className="yc-grid">
          {g.keys.map((k) => <label key={k} className="yc-label">{LABELS[k]}
            <select value={i[k]} onChange={(e) => setI({ ...i, [k]: e.target.value })}>
              {OPTIONS[k].map((o) => <option key={o[0]} value={o[0]}>{o[1]}</option>)}
            </select></label>)}
        </div>
      </section>)}
    </div>

    <aside className="yc-side">
      <section className="yc-result" aria-live="polite">
        <h2>Estimated annual premium</h2>
        {valid ? <>
          <p className="yc-range">{usd(est.low)} to {usd(est.high)}</p>
          <p className="yc-note">Roughly {usd(est.midpoint)} a year at the middle of the range.</p>
          <dl>
            <div><dt>Hull and machinery</dt><dd>about {usd(est.hull)}</dd></div>
            {est.liability > 0 && <div><dt>Liability</dt><dd>about {usd(est.liability)}</dd></div>}
            {est.extras > 0 && <div><dt>Medical and uninsured boater</dt><dd>about {usd(est.extras)}</dd></div>}
          </dl>
          {est.notes.length > 0 && <ul className="yc-warn">{est.notes.map((n) => <li key={n}>{n}</li>)}</ul>}
        </> : <p className="yc-note">Enter a value to see an estimate.</p>}
        <p className="yc-fine">This is Coast &amp; Marsh&rsquo;s own simplified estimate for general planning. It is not a quote, an offer of coverage or a carrier rate. Actual premiums depend on underwriting and can be much higher or lower.</p>
      </section>
    </aside>

    <section className="yc-quote" id="quote" aria-label="Request a quote">
      <h2>Want a real number?</h2>
      {state === 'done' ? <p className="yc-done">Thanks. We have your details and will reply by email, usually within one business day. Nothing is bound or in force until you receive written confirmation of coverage.</p> :
      <form onSubmit={submit} className="yc-grid">
        <p className="yc-note yc-full">We will send your answers above, along with your contact details, to Coast &amp; Marsh Insurance Advisory so we can look for markets. This does not obligate you in any way.</p>
        <label className="yc-label">Name<input required maxLength={120} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} autoComplete="name" /></label>
        <label className="yc-label">Email<input required type="email" maxLength={200} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} autoComplete="email" /></label>
        <label className="yc-label">Phone (optional)<input type="tel" maxLength={40} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} autoComplete="tel" /></label>
        <label className="yc-label">Where is the vessel kept? (city and state)<input maxLength={120} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} /></label>
        <label className="yc-label yc-full">Anything else we should know? (make, model, current insurer, renewal date)<textarea rows={3} maxLength={1500} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></label>
        <div aria-hidden="true" className="yc-hp"><label>Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} /></label></div>
        <label className="yc-consent yc-full"><input type="checkbox" required checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} />
          <span>I agree that Coast &amp; Marsh Insurance Advisory may contact me by email{form.phone ? ' and phone' : ''} about this request. I understand this form does not bind coverage.</span></label>
        {state === 'error' && <p className="yc-error yc-full" role="alert">{err}</p>}
        <div className="yc-full"><button className="button olive yc-submit" disabled={state === 'sending' || !valid}>{state === 'sending' ? 'Sending…' : 'Send my details'}</button></div>
      </form>}
      <p className="yc-fine">Coast &amp; Marsh Insurance Advisory &middot; PO Box 48, Ponte Vedra Beach, FL 32082. Insurance products and availability vary by carrier and state.</p>
    </section>
  </div>
}
