// Trade landing pages under /contractor-insurance/[slug].
// License minimums come from the Florida Administrative Code:
//   61G4-15.003 (CILB trades) and 61G6-5.008 (electrical). Re-check them if the rules change.
// formTrade must match a TRADES value in app/contractor-insurance/QuoteForm.js.

const WC_FAQ = ['Do I need workers’ compensation?', 'In Florida, a construction business with one or more employees, including part-time workers, generally must carry workers’ compensation. Up to three corporate officers or LLC members who each own at least 10% may apply for a construction exemption through the Division of Workers’ Compensation. Employees can’t be exempted.'];

export const TRADES = [
  {
    slug: 'electrical',
    formTrade: 'Electrical',
    name: 'Electrical Contractor',
    title: 'Electrical Contractor Insurance in Florida',
    description: 'General liability, workers’ comp, umbrella and tools coverage for Florida electrical contractors, including the state license insurance minimums and what insurers ask about.',
    lead: 'Florida electrical contractors are rated on the work they actually do: service and repair versus new construction, residential versus commercial, and whether jobs touch hospitals, high voltage, solar or fire alarm systems.',
    license: 'Certified and registered electrical contractors must carry liability and property damage insurance under Rule 61G6-5.008: at least $100,000 per person and $300,000 per occurrence for liability plus $500,000 for property damage, or an $800,000 combined single limit, including products and completed operations.',
    exposures: [
      ['Fire and property damage', 'A wiring fault can cause a fire months after the job is finished, so completed-operations coverage matters as much as on-site coverage.'],
      ['Healthcare and critical systems', 'Hospital work, emergency power and life-safety systems often bring higher limits and specific additional insured wording in the contract.'],
      ['Height and underground work', 'Work above three stories, trenching and underground runs can change which insurers will quote.'],
      ['Solar and low voltage', 'Solar, alarm and low-voltage work are often classified separately and some policies exclude them.']
    ],
    faqs: [
      ['What general liability limit do most electrical contractors carry?', 'The license minimum is lower than what most general contractors and facility owners ask for. $1,000,000 per occurrence and $2,000,000 aggregate is a common contract requirement, and some commercial and hospital work asks for an umbrella on top.'],
      ['Can a brand-new electrical company get coverage?', 'Yes. Startups usually start with general liability and add workers’ comp once they hire. Expect underwriters to ask about the qualifier’s experience, planned work mix and any hospital or high-voltage work.'],
      WC_FAQ
    ]
  },
  {
    slug: 'roofing',
    formTrade: 'Roofing',
    name: 'Roofing Contractor',
    title: 'Roofing Contractor Insurance in Florida',
    description: 'Florida roofing contractor insurance: general liability, workers’ comp and umbrella, standard and specialty markets, and the state license insurance minimum.',
    lead: 'Roofing is one of the hardest Florida trades to insure. Many standard insurers won’t write it, so roofers often end up with specialty (surplus lines) carriers. Your residential versus commercial mix, roof heights and roof types decide which ones will quote.',
    license: 'Certified and registered roofing contractors must carry at least $100,000 of public liability and $25,000 of property damage insurance under Rule 61G4-15.003. Most contracts ask for far more.',
    exposures: [
      ['Water intrusion', 'Leaks and storm damage after a tear-off are the most common roofing claims. Check whether the policy limits or excludes them.'],
      ['Falls and height', 'Insurers ask about maximum stories, steep-slope work and fall protection. Workers’ comp rates for roofing are among the highest in Florida.'],
      ['Residential re-roof', 'Residential re-roofing after storms is priced and underwritten differently from commercial flat-roof work.'],
      ['Hot work', 'Torch-down and hot-tar applications are often excluded or priced separately.']
    ],
    faqs: [
      ['Why are roofing quotes so different from one another?', 'Specialty carriers write roofing with different exclusions for height, hot work, water damage and residential work. The cheapest quote can leave out exactly the work you do most, so compare exclusions, not only price.'],
      ['Can I get coverage as a new roofing company?', 'Usually, but expect a minimum premium and a specialty carrier. Your experience as a roofer and a clear description of your work help.'],
      WC_FAQ
    ]
  },
  {
    slug: 'hvac',
    formTrade: 'HVAC & Mechanical',
    name: 'HVAC Contractor',
    title: 'HVAC Contractor Insurance in Florida',
    description: 'Insurance for Florida HVAC and air conditioning contractors: general liability, workers’ comp, commercial auto and tools, plus the state license insurance minimum.',
    lead: 'In Florida, HVAC contractors are mostly service and replacement businesses with vans on the road every day. General liability, workers’ comp and commercial auto make up most of the program.',
    license: 'Certified and registered air conditioning and mechanical contractors must carry at least $100,000 of public liability and $25,000 of property damage insurance under Rule 61G4-15.003.',
    exposures: [
      ['Water and mold', 'Condensate leaks and refrigerant line issues can cause water damage inside a customer’s home. Mold is often excluded.'],
      ['Vehicles', 'Service vans and the employees who drive them are often the largest exposure. Personal auto policies usually won’t cover them.'],
      ['Tools and equipment', 'Gauges, recovery machines and inventory on the truck need inland marine coverage. A general liability policy won’t pay for them.'],
      ['Commercial and rooftop units', 'Rooftop and commercial mechanical work changes the classification and height questions.']
    ],
    faqs: [
      ['Do I need commercial auto if my techs drive their own trucks?', 'If employees use their own vehicles for work, hired and non-owned auto coverage protects the business. Company-owned vans need a commercial auto policy.'],
      ['Does general liability cover equipment I install?', 'It can cover damage the equipment causes to other property. It doesn’t pay to repair your own faulty work or replace the unit.'],
      WC_FAQ
    ]
  },
  {
    slug: 'plumbing',
    formTrade: 'Plumbing',
    name: 'Plumbing Contractor',
    title: 'Plumbing Contractor Insurance in Florida',
    description: 'Florida plumbing contractor insurance: general liability, workers’ comp, commercial auto and tools coverage, plus the state license insurance minimum.',
    lead: 'For Florida plumbers, water damage claims drive the price. Insurers want to know how much of your work is service and repair versus new construction, and how much is residential versus commercial.',
    license: 'Certified and registered plumbing contractors must carry at least $100,000 of public liability and $25,000 of property damage insurance under Rule 61G4-15.003.',
    exposures: [
      ['Water damage', 'A failed fitting can flood a home or a floor of a building. Completed-operations coverage and the water damage terms in the policy matter most.'],
      ['Gas lines', 'Gas piping work is underwritten differently and some markets won’t write it. Tell the insurer if you do it.'],
      ['Excavation and sewer', 'Underground, sewer and trenching work can trigger exclusions or separate classification.'],
      ['Vans and tools', 'Commercial auto and inland marine cover the trucks and tools that general liability doesn’t.']
    ],
    faqs: [
      ['Is gas line work covered under a plumbing policy?', 'Not always. Some policies exclude or limit gas work, and Florida LP gas licenses have their own insurance rules. Disclose it so the policy matches.'],
      ['What limits do property managers ask for?', '$1,000,000 per occurrence with additional insured status and a waiver of subrogation is common for commercial and property management work.'],
      WC_FAQ
    ]
  },
  {
    slug: 'general-contractors',
    formTrade: 'General Contractor',
    name: 'General Contractor',
    title: 'General Contractor Insurance in Florida',
    description: 'Insurance for Florida general, building and residential contractors: general liability, workers’ comp, umbrella and builders risk, subcontractor certificates and license minimums.',
    lead: 'For Florida general contractors, subcontractors drive the insurance. Insurers want to see what you subcontract, whether your subs carry their own coverage, and whether your contracts transfer risk to them.',
    license: 'Under Rule 61G4-15.003, certified and registered general and building contractors must carry at least $300,000 of public liability and $50,000 of property damage insurance. Residential contractors must carry at least $100,000 and $25,000.',
    exposures: [
      ['Uninsured subcontractors', 'If a sub has no coverage, your general liability and workers’ comp auditors may charge you for their payroll or their claims.'],
      ['Contract requirements', 'Owners and lenders often require additional insured status for completed operations, primary and non-contributory wording, waivers of subrogation and per-project aggregates.'],
      ['Builders risk', 'A building under construction needs its own property policy until it’s turned over.'],
      ['Higher limits', 'Larger projects often require an umbrella or excess policy on top of general liability, auto and employer’s liability.']
    ],
    faqs: [
      ['Do I need certificates from every subcontractor?', 'You should collect current general liability and workers’ comp certificates (or a valid exemption) before work starts. Your insurer will ask for them at audit.'],
      ['Who buys builders risk, the owner or the contractor?', 'It depends on the contract. Either party can, but the contract should say who carries it and who is named.'],
      WC_FAQ
    ]
  },
  {
    slug: 'new-contractors',
    formTrade: '',
    name: 'New Contractor',
    title: 'Insurance for New Florida Contractors and Startups',
    description: 'Starting a contracting business in Florida or moving one here? What insurance you need for your license, your first contracts and your first hire, and what insurers ask a startup.',
    lead: 'A new LLC, a brand-new license, or a company that already works in another state and is now taking jobs in Florida. Many insurers won’t quote a business with no history, but some will, and a clear submission improves your odds.',
    license: 'Florida contractor licenses require proof of general liability before the license is issued: $300,000/$50,000 for general and building contractors, $100,000/$25,000 for most other trades under Rule 61G4-15.003, and the electrical minimums in Rule 61G6-5.008. Contracts usually ask for more.',
    exposures: [
      ['No loss history', 'Insurers look at the qualifier’s years in the trade, prior employers and licenses in other states.'],
      ['Projected numbers', 'Startups are rated on projected revenue and payroll. Estimate carefully, because the policy is audited at the end of the term.'],
      ['Out-of-state companies', 'If you already have workers’ comp in another state, adding Florida to that policy or buying a Florida policy has to happen before your employees start work here.'],
      ['First hire', 'In construction, hiring one employee generally triggers Florida’s workers’ comp requirement.']
    ],
    faqs: [
      ['Can I get a quote before my LLC or license is finished?', 'You can get an indication, but most insurers need the legal entity name and license number before they bind. Start the conversation early so coverage is ready when the license is.'],
      ['What should I send to get a startup quote?', 'Your trade and the work you’ll perform, years of experience, projected first-year revenue and payroll, planned subcontractor use, the counties you’ll work in, and any contract insurance requirements you already have.'],
      WC_FAQ
    ]
  }
];

export const tradeBySlug = Object.fromEntries(TRADES.map((t) => [t.slug, t]));
