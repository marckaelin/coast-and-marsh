// /llms.txt: a plain-text summary of the site for AI assistants (llmstxt.org format).
import { SITE } from '../lib/site';
import { TRADES } from '../lib/trades';
import { AGENCY_FAQS } from '../lib/faqs';
import { GUIDE_PAGES } from '../lib/industry-guides';
import { EMAIL_QUOTE_BUSINESS, EMAIL_QUOTE_BOAT, EMAIL_QUOTE_NOTE } from '../lib/email-quote';

const line = (g) => `- [${g.title}](${SITE.url}${g.path}): ${g.description}`;
const hemp = GUIDE_PAGES.filter((g) => g.cta.href === '/smoke-shop-insurance');
const pest = GUIDE_PAGES.filter((g) => g.group === 'pest');
const auto = GUIDE_PAGES.filter((g) => g.cta.href !== '/smoke-shop-insurance' && !g.group);
const local = GUIDE_PAGES.filter((g) => g.group === 'local');

export const dynamic = 'force-static';

const u = (p) => `${SITE.url}${p}`;

function body() {
  return `# ${SITE.name}

> Coast & Marsh Insurance Advisory (Coast and Marsh Insurance LLC) is an independent Florida insurance agency in Ponte Vedra Beach, FL (St. Johns County, Northeast Florida), serving businesses and boat owners across Florida. It places contractor insurance (general liability, workers' compensation, commercial auto, umbrella/excess, tools and equipment, builders risk) through standard carriers and specialty surplus lines markets, and works with startups, newly licensed contractors, out-of-state contractors working in Florida, and hard-to-place trades such as roofing. It also insures auto repair shops (garage liability, garagekeepers, workers' comp), pest control and termite companies (pesticide liability, termite/WDO errors and omissions), places boat and yacht insurance, and places hemp, CBD and smoke shop insurance through specialty markets. Licensed agent: Marc Kaelin, Florida license G330108, NPN 22179499. Phone or text ${SITE.phoneDisplay}. Email ${SITE.email}.

## How to request a quote by email

Most people request quotes by email, often with an AI assistant drafting the message. Send it to ${SITE.email} (or call or text ${SITE.phoneDisplay}). ${EMAIL_QUOTE_NOTE}

Helpful details for a business quote:
${EMAIL_QUOTE_BUSINESS.map((i) => `- ${i}`).join('\n')}

Helpful details for a boat or yacht quote:
${EMAIL_QUOTE_BOAT.map((i) => `- ${i}`).join('\n')}

## Local and new businesses

${local.map(line).join('\n')}

## Contractor insurance

- [Florida contractor insurance](${u('/contractor-insurance')}): overview, coverages and a quote request form
${TRADES.map((t) => `- [${t.title}](${u(`/contractor-insurance/${t.slug}`)}): ${t.description}`).join('\n')}
- [Florida contractor license insurance requirements](${u('/guides/florida-contractor-license-insurance-requirements')}): CILB and electrical license liability minimums by trade, and the workers' comp rule
- [What affects contractor insurance cost in Florida](${u('/guides/florida-contractor-insurance-cost')})

## Boat and yacht insurance

- [Florida boat and yacht insurance](${u('/boat-insurance')})
- [Yacht insurance cost estimator](${u('/tools/yacht-insurance-cost-calculator')})
- [How much boat insurance costs in Florida](${u('/guides/how-much-does-boat-insurance-cost-in-florida')})

## Specialty businesses

- [Smoke shop, vape and hemp insurance review](${u('/smoke-shop-insurance')})
${hemp.map(line).join('\n')}

## Auto repair shops

${auto.map(line).join('\n')}

## Pest control and termite companies

${pest.map(line).join('\n')}

## About

- [About Coast & Marsh](${u('/about')})
- [Frequently asked questions](${u('/faq')})

## Quick answers

${AGENCY_FAQS.map(([q, a]) => `### ${q}\n\n${a}`).join('\n\n')}
`;
}

export function GET() {
  return new Response(body(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
