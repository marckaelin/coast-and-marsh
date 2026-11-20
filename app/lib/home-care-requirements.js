// Insurance requirements shown in the home care quote flow (app/components/HomeCareQuote.js).
// Franchise rows come from each franchisor's public franchise disclosure document (FDD);
// see /mnt/project-files/reports/home-care/franchise-insurance-requirements-top3-2026-11-20.xlsx.
// Re-check when a new FDD edition is issued. Never name an insurance carrier here.
// Keep the option ids in sync with app/api/leads/home-care/route.ts in the nextjs-boilerplate repo.

export const HOME_CARE_OPTIONS = [
  {
    id: 'visiting-angels',
    label: 'Visiting Angels',
    source: 'Visiting Angels franchise disclosure document, April 2026',
    lines: [
      ['General liability', '$1M per occurrence / $3M aggregate, including personal injury'],
      ['Professional liability', '$1M / $3M'],
      ['Abuse and molestation', '$500K'],
      ['Auto, including hired and non-owned', '$1M'],
      ['Umbrella', '$1M over professional, general, auto and employer’s liability'],
      ['Workers’ comp and employer’s liability', 'Required, even where state law wouldn’t'],
      ['Client theft (crime) bond', '$25K'],
      ['EPLI', '$500K'],
      ['Cyber', '$500K']
    ],
    fine: [
      'Additional insured: the franchisor, on professional, general liability and EPLI',
      'Report any change in coverage to the franchisor within 10 days',
      'Proof of coverage is due before you attend training'
    ]
  },
  {
    id: 'home-instead',
    label: 'Home Instead',
    source: 'Home Instead franchise disclosure document, April 2026',
    lines: [
      ['General liability', '$1M per occurrence / $3M aggregate, including products-completed operations'],
      ['Professional liability', '$1M / $3M'],
      ['Auto, including hired and non-owned', '$1M combined single limit'],
      ['Umbrella', '$1M'],
      ['Workers’ comp and employer’s liability', 'Required, regardless of state law'],
      ['Client theft (crime) coverage', '$25K'],
      ['EPLI', '$500K per claim / $1M aggregate'],
      ['Property', 'Special form at replacement cost, plus business income']
    ],
    fine: [
      'Every carrier rated A or better by AM Best (workers’ comp excepted)',
      'Additional insured: the franchisor and its affiliates, officers and directors, on a primary basis',
      'Waiver of subrogation',
      '30 days’ notice to the franchisor before cancellation or change',
      'Certificate due within 90 days of signing, then every year'
    ]
  },
  {
    id: 'senior-helpers',
    label: 'Senior Helpers',
    source: 'Senior Helpers franchise disclosure document, April 2025',
    lines: [
      ['General liability', '$1M per occurrence / $3M aggregate, plus personal injury and property damage at $1M'],
      ['Professional liability', '$1M per incident / $3M aggregate'],
      ['Auto, including hired and non-owned', '$1M'],
      ['Umbrella or excess', 'May be required'],
      ['Workers’ comp and employer’s liability', 'Per Florida law'],
      ['Fidelity (client theft) bond', '$25K with a $2,500 deductible, or more if required'],
      ['EPLI', '$500K / $500K'],
      ['Cyber', '$500K / $500K']
    ],
    fine: [
      'Additional insured: the franchisor, its officers and affiliates, on ISO form CG 20 26',
      'Primary and non-contributory, with waiver of subrogation',
      '30 days’ notice to the franchisor before cancellation or material change'
    ]
  },
  {
    id: 'other-franchise',
    label: 'Another franchise',
    hint: 'My brand isn’t listed',
    source: 'Typical home care franchise agreement',
    intro: 'Most home care franchise agreements ask for something close to this. Send us your agreement’s insurance section and we’ll quote to it exactly.',
    lines: [
      ['General and professional liability', '$1M per occurrence / $3M aggregate each'],
      ['Abuse and molestation', 'Often $500K or more'],
      ['Auto, including hired and non-owned', '$1M'],
      ['Umbrella', 'Often $1M'],
      ['Workers’ comp and employer’s liability', 'Usually required'],
      ['Client theft (crime) bond', 'Often $25K'],
      ['EPLI and cyber', 'Often $500K each']
    ],
    fine: [
      'Look for: a minimum carrier rating, additional insured wording, primary and non-contributory, waiver of subrogation and notice to the franchisor'
    ]
  },
  {
    id: 'independent',
    label: 'Independent agency',
    hint: 'Not a franchise',
    source: 'Coast & Marsh recommended starting point',
    intro: 'Our recommended starting point for a Florida home care agency. We adjust it to your size, services and any limits your contracts or referral sources require.',
    lines: [
      ['General and professional liability', '$1M per occurrence / $3M aggregate'],
      ['Abuse and molestation', '$500K or more'],
      ['Hired and non-owned auto', '$1M (commercial auto if you own vehicles)'],
      ['Workers’ comp and employer’s liability', 'Florida statutory'],
      ['Client theft (crime) bond', '$25K'],
      ['Umbrella', '$1M'],
      ['EPLI', '$500K'],
      ['Cyber', '$250K to $500K']
    ],
    fine: [
      'Medicaid plans, VA community care and referral sources may set their own minimums. Send us the contract language if you have it.'
    ]
  }
];

export const CAREGIVERS = ['1-10', '11-25', '26-50', '51-100', 'Over 100', 'Not open yet'];
export const REVENUE = ['Under $250K', '$250K-$500K', '$500K-$1M', '$1M-$3M', 'Over $3M', 'Not open yet'];
