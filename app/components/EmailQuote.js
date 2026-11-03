import { SITE } from '../lib/site';
import { EMAIL_QUOTE_BUSINESS, EMAIL_QUOTE_NOTE } from '../lib/email-quote';

// "Prefer email?" block for service pages. Optional checklist, never a gate.
export default function EmailQuote({ subject = 'Insurance quote', items = EMAIL_QUOTE_BUSINESS, heading = 'Prefer to request a quote by email?' }) {
  const href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
  return <div className="email-quote" id="email-quote">
    <h2>{heading}</h2>
    <p>Email <a href={href}>{SITE.email}</a>. These details help us quote faster:</p>
    <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
    <p className="email-quote-note">{EMAIL_QUOTE_NOTE}</p>
  </div>;
}
