// Industry landing pages and guides rendered by app/components/GuidePage.js.
// Rules for this copy: never name a carrier or wholesaler, never promise coverage or price,
// and never tell a hemp retailer which products are legal. Re-check dated facts (marked below).

const HEMP_NOTE = 'General information only, not legal advice, a quote or a coverage determination. Federal and Florida hemp rules are changing; dates reflect federal law as of November 2026. Ask an attorney which products you may sell. Eligibility, pricing and terms are set by the insurer.';
const AUTO_NOTE = 'General information only, not a quote or coverage determination. Coverage forms differ by insurer; read your policy for exact terms. Eligibility, pricing and terms are set by the insurer.';

const HEMP_CTA = { short: 'Get a review', label: 'Start a hemp shop review', href: '/smoke-shop-insurance', title: 'Want your policy checked before December 11?', text: 'Start the online review, or call or text 904-988-5026 with your renewal date.' };
const AUTO_CTA = { short: 'Text for a quote', label: 'Text QUOTE to 904-988-5026', href: 'sms:+19049885026?body=QUOTE', title: 'Want your shop insurance shopped?', text: 'Text QUOTE to 904-988-5026 and answer six quick questions. No forms.' };

export const GUIDES = {
  // ---------- Hemp, CBD and smoke shops ----------
  hempStore: {
    kind: 'service',
    serviceType: 'Hemp and CBD store insurance',
    path: '/hemp-cbd-store-insurance',
    eyebrow: 'HEMP, CBD & SMOKE SHOP INSURANCE',
    title: 'Hemp and CBD Store Insurance in Florida',
    description: 'Insurance for Florida hemp, CBD and smoke shops: general and products liability, property and inventory, and what underwriters ask about your product mix before and after the December 11 federal hemp change.',
    lead: 'Most standard insurers won’t write a store that sells hemp-derived products, so Florida hemp, CBD and smoke shops are usually placed with specialty markets. What you sell, and how much of your sales each product makes up, decides which markets will quote.',
    sections: [
      { h: 'Coverage hemp and CBD stores usually need', grid: [
        ['General liability', 'Customer injuries in the store and damage you cause to others. Check whether hemp, THC or kratom products are excluded.'],
        ['Products liability', 'Claims that a product you sold made someone sick. This matters most for edibles, drinks and private-label products.'],
        ['Property and inventory', 'Your building or improvements, fixtures and stock. Read how the policy treats products that are illegal to own, especially after December 11.'],
        ['Workers’ comp, crime and umbrella', 'Workers’ comp once you have four or more employees, theft and employee dishonesty coverage for a cash-heavy business, and extra liability limits if a landlord asks.']
      ] },
      { h: 'What underwriters ask', list: [
        'Your product mix as a share of sales: CBD, intoxicating hemp (delta-8, delta-9, THCA), vape and tobacco, kratom, kava and accessories',
        'Whether you sell private-label or house-brand products, and who manufactures them',
        'Certificates of analysis (COAs) for what you stock, and whether your suppliers carry their own products liability',
        'Your FDACS hemp permit, years in business, security (cameras, alarm, safe) and claims history'
      ], p: ['Kratom is a common reason for a decline. Stores where CBD and accessories make up most of sales have the most options, and the share of intoxicating products is usually the deciding question.'] },
      { h: 'The December 11 change', p: ['On December 11, 2026 the federal definition of hemp changes. Finished products with more than 0.4 mg of total THC per container no longer count as hemp, and THCA counts toward total THC. Insurers are rewriting policy forms, and some have paused new hemp business. See what to check in our guide to hemp shop insurance after December 11.'] }
    ],
    faqs: [
      ['Can a Florida hemp or CBD store still get insurance?', 'Yes. Specialty markets still write Florida hemp and CBD retailers, mostly stores where CBD and accessories are most of sales and intoxicating hemp products are a small share. Kratom often leads to a decline.'],
      ['Does general liability cover the products I sell?', 'Only if the policy includes products liability and doesn’t exclude the product type. Many policies exclude THC, hemp or kratom products, so read the exclusions page.'],
      ['Do I need workers’ comp for my shop?', 'In Florida, a non-construction business generally must carry workers’ compensation once it has four or more employees, including part-time workers.'],
      ['What do I need to start a quote?', 'Your product mix as a rough percentage of sales, annual sales, years open, store address, your current policy’s declarations page if you have one, and any claims in the last three years.']
    ],
    related: ['hempDec11', 'hempProducts', 'smokeReview'],
    cta: HEMP_CTA,
    note: HEMP_NOTE
  },
  hempDec11: {
    kind: 'article',
    date: '2026-11-03',
    parent: 'hempStore',
    path: '/guides/hemp-shop-insurance-after-december-11',
    eyebrow: 'HEMP SHOP INSURANCE',
    title: 'Hemp Shop Insurance After December 11: What to Check',
    description: 'What the December 11, 2026 federal hemp definition change means for a Florida hemp, CBD or smoke shop’s insurance: exclusions, products liability, inventory and renewals.',
    lead: 'On December 11, 2026 the federal definition of hemp changes. Many products sold in Florida hemp and smoke shops today won’t count as hemp after that date, and insurance policies are changing to match. Here is what to check before then.',
    sections: [
      { h: 'What changes on December 11', list: [
        'Hemp is measured by total THC, including THCA and delta-8, not delta-9 alone.',
        'Finished products with more than 0.4 mg of total THC per container fall outside the federal hemp definition. A single 5 mg gummy is already over the limit.',
        'Synthetic cannabinoids that the plant can’t naturally produce lose hemp status a month earlier, on November 12, 2026.',
        'The original date was November 12; a law signed September 2, 2026 moved most of it to December 11. Bills to delay further or repeal it are pending in Congress, but none had passed as of this writing.'
      ] },
      { h: 'Four things to check in your policy', grid: [
        ['Exclusions', 'Does the policy exclude THC, hemp-derived or “controlled substance” products now, or will a new exclusion appear at renewal?'],
        ['Products liability', 'If a customer makes a claim over something you sold before December 11, will the policy still respond? Some insurers are adding endorsements for products that were legal when sold.'],
        ['Inventory', 'Property insurance usually won’t pay for goods that are illegal to own. Products still on your shelves after December 11 may not be covered after a theft or fire.'],
        ['Cancellation and renewal', 'Some hemp policies written this fall have been cancelled. Know your renewal date and whether your insurer has sent a notice or a new endorsement.']
      ] },
      { h: 'What to keep on file', list: [
        'Invoices and certificates of analysis for products you sold before December 11',
        'A record of what share of your sales each product type makes up',
        'Every notice, endorsement or renewal offer your insurer sends'
      ], p: ['If a claim comes in later over a product sold before the change, those records help show what you sold and when.'] }
    ],
    faqs: [
      ['Will my hemp shop insurance be cancelled on December 11?', 'Not automatically, but some insurers are cancelling, adding exclusions or not renewing hemp policies. Check for notices and endorsements, and know your renewal date.'],
      ['Are claims for products I sold before December 11 still covered?', 'It depends on the policy. Some insurers are adding endorsements that cover products that were legal when they were made or sold. Ask your agent to confirm in writing.'],
      ['Can I still get insurance if I mostly sell CBD?', 'Usually yes. Specialty markets are still writing Florida stores where CBD and accessories are most of sales and intoxicating hemp products are a small share.'],
      ['Which products can I legally sell after December 11?', 'That’s a question for an attorney. An insurance agent can tell you what your policy covers, not what is legal to sell.']
    ],
    related: ['hempStore', 'hempProducts', 'smokeReview'],
    cta: HEMP_CTA,
    note: HEMP_NOTE
  },
  hempProducts: {
    kind: 'article',
    date: '2026-11-03',
    parent: 'hempStore',
    path: '/guides/hemp-cbd-products-liability-insurance',
    eyebrow: 'HEMP SHOP INSURANCE',
    title: 'Products Liability Insurance for Hemp and CBD Stores',
    description: 'How products liability works for Florida hemp and CBD retailers: private label, supplier coverage, certificates of analysis, vendor endorsements and common exclusions.',
    lead: 'If a customer says a gummy, tincture or vape you sold made them sick, the claim usually lands on the store as well as the manufacturer. Products liability is the part of a hemp shop’s insurance that responds, if the policy includes it.',
    sections: [
      { h: 'Why retailers get named in claims', p: ['A customer usually sues everyone in the chain: the brand, the manufacturer and the store that sold it. Even when the manufacturer is at fault, the store has to defend itself, and defense costs alone can be large.'] },
      { h: 'Private label changes the risk', p: ['If a product carries your store’s name, insurers treat you more like the manufacturer. Expect more questions, higher premiums or a decline. Tell your agent about every private-label product up front, because a claim on an undisclosed product can be denied.'] },
      { h: 'Get your suppliers to share the risk', list: [
        'Ask suppliers for a certificate of insurance showing their own products liability coverage',
        'Ask to be added as an additional insured under a vendor’s endorsement on their policy',
        'Keep certificates of analysis for each batch you stock',
        'Buy from suppliers with a US address and an insurer you can name, so there is someone to pass a claim to'
      ] },
      { h: 'Common exclusions to look for', list: [
        'THC, hemp-derived or cannabis product exclusions',
        'Kratom or “botanical” exclusions',
        'Vape device and battery exclusions',
        'Ingestible or edible product exclusions'
      ] }
    ],
    faqs: [
      ['Does a business owner’s policy (BOP) cover hemp products?', 'Usually not. Most standard BOPs exclude or won’t write hemp-derived products, so hemp stores are generally placed with specialty markets.'],
      ['Is products liability included in general liability?', 'Often, as “products and completed operations,” but many hemp shop policies exclude specific product types. Check the exclusions page, not just the limits.'],
      ['Do I need products liability if my supplier has it?', 'Yes. Your supplier’s policy protects you only if you are named as an additional insured, and only up to its limits. Your own policy covers your defense.']
    ],
    related: ['hempStore', 'hempDec11', 'smokeReview'],
    cta: HEMP_CTA,
    note: HEMP_NOTE
  },
  smokeReview: { path: '/smoke-shop-insurance', title: 'Smoke shop, vape and hemp insurance review' },

  // ---------- Auto repair shops ----------
  autoRepair: {
    kind: 'service',
    serviceType: 'Auto repair shop insurance',
    path: '/auto-repair-shop-insurance',
    eyebrow: 'AUTO REPAIR SHOP INSURANCE',
    title: 'Auto Repair Shop Insurance in Florida',
    description: 'Insurance for Florida auto repair, mechanic, tire, transmission and body shops: garage liability, garagekeepers, workers’ comp, property and tools, and what insurers ask.',
    lead: 'A Florida repair shop needs coverage for two different things: injuries and damage caused by your work, and the customer cars sitting in your bays and on your lot. Many shops have the first and are thin on the second.',
    sections: [
      { h: 'Coverage repair shops usually need', grid: [
        ['Garage liability', 'Customer injuries at the shop and damage caused by your operations or by faulty work after the car leaves.'],
        ['Garagekeepers', 'Damage to customers’ vehicles while they are in your care: fire, theft, flood, vandalism and accidents during test drives.'],
        ['Workers’ compensation', 'Required in Florida once you have four or more employees, and often required by landlords and dealers before that.'],
        ['Property, tools and equipment', 'Your building or improvements, lifts, diagnostic equipment and tools, plus business income if a storm closes the shop.']
      ] },
      { h: 'What insurers ask', list: [
        'Services you perform: general repair, tires, transmission, body and paint, glass, towing or vehicle sales',
        'How many customer cars are at the shop overnight, and whether they are inside or on a fenced lot',
        'Number of employees, payroll and years in business',
        'Annual sales, any claims in the last three years and who test-drives vehicles'
      ], p: ['Body and paint work, towing and car sales each change the price and which markets will quote, so mention them up front.'] },
      { h: 'Storm season and customer cars', p: ['In Florida, hurricanes and flooding are the big garagekeepers risk. A storm can damage a lot full of customer cars at once. Check your garagekeepers limit against the value of the cars you typically hold, and whether the coverage includes comprehensive (flood, wind, theft) or only collision.'] }
    ],
    faqs: [
      ['Is garagekeepers the same as garage liability?', 'No. Garage liability covers injuries and damage your shop causes to others. Garagekeepers covers customers’ cars while you have them. Most shops need both. See our guide to garage liability vs garagekeepers.'],
      ['Does my general liability cover customer cars?', 'Usually not. General liability normally excludes property in your care, custody or control, which includes cars left for repair. That gap is what garagekeepers fills.'],
      ['How do I get a quote?', 'Text QUOTE to 904-988-5026 and answer six quick questions, or email your current policy’s declarations page to marc.kaelin@coastandmarsh.com.']
    ],
    related: ['garagekeepers', 'autoWc'],
    cta: AUTO_CTA,
    note: AUTO_NOTE
  },
  garagekeepers: {
    kind: 'article',
    date: '2026-11-03',
    parent: 'autoRepair',
    path: '/guides/garage-liability-vs-garagekeepers',
    eyebrow: 'AUTO REPAIR SHOP INSURANCE',
    title: 'Garage Liability vs Garagekeepers Coverage',
    description: 'The difference between garage liability and garagekeepers insurance for Florida auto repair shops, the coverage options (legal liability, direct, primary and excess), and how to pick a limit.',
    lead: 'They sound alike, but they cover different things. Garage liability protects you when your shop hurts someone or damages their property. Garagekeepers protects the customer cars you are holding.',
    sections: [
      { h: 'Garage liability', p: ['Covers bodily injury and property damage to others from your shop’s operations: a customer slips in the bay, or a brake job you did fails and causes an accident after the car leaves. It is the repair shop’s version of general liability.'] },
      { h: 'Garagekeepers', p: ['Covers damage to customers’ vehicles while they are in your care, custody or control: in the bay, on the lot overnight or on a test drive. General liability normally excludes that property, so without garagekeepers a fire, theft or flood on your lot can fall on you.'] },
      { h: 'Garagekeepers options', grid: [
        ['Legal liability', 'Pays only when your shop is legally responsible for the damage. It is the cheapest option, and it leaves gaps for storms and theft where you weren’t negligent.'],
        ['Direct, excess', 'Pays regardless of fault, but only after the customer’s own auto insurance pays first.'],
        ['Direct, primary', 'Pays regardless of fault, before the customer’s insurance. The customer is happiest and the premium is highest.'],
        ['Comprehensive and collision', 'Comprehensive covers fire, theft, wind and flood. Collision covers accidents, including test drives. Check that you have both.']
      ] },
      { h: 'How to pick a limit', p: ['Add up the value of the most customer cars you would ever have at the shop at once, including the lot during a busy week or before a storm. Your per-location garagekeepers limit should cover that total.'] }
    ],
    faqs: [
      ['Do I need garagekeepers if customers have their own car insurance?', 'Usually yes. The customer’s insurer may pay and then come after your shop. Some customers carry only liability, and claims hurt your reputation either way.'],
      ['Does garagekeepers cover my tools or my own vehicles?', 'No. Tools and equipment need property or inland marine coverage, and shop-owned vehicles need commercial auto.'],
      ['Which garagekeepers option should I buy?', 'Shops that hold cars overnight in a hurricane area are usually better served by direct coverage than legal liability, because storm and theft losses often aren’t anyone’s fault.']
    ],
    related: ['autoRepair', 'autoWc'],
    cta: AUTO_CTA,
    note: AUTO_NOTE
  },
  autoWc: {
    kind: 'article',
    date: '2026-11-03',
    parent: 'autoRepair',
    path: '/guides/workers-comp-for-auto-repair-shops-florida',
    eyebrow: 'AUTO REPAIR SHOP INSURANCE',
    title: 'Workers’ Comp for Florida Auto Repair Shops',
    description: 'When a Florida auto repair shop must carry workers’ compensation, how the premium is calculated, officer exemptions, and how to keep the cost down.',
    lead: 'Mechanics work with lifts, heavy parts, chemicals and hot exhaust, so injuries happen. Florida law decides when workers’ comp is required, and payroll decides what it costs.',
    sections: [
      { h: 'When Florida requires it', p: ['A non-construction business in Florida generally must carry workers’ compensation once it has four or more employees, full- or part-time. Corporate officers can usually elect an exemption for themselves, but employees can’t be exempted. Many landlords, dealers and fleet customers require proof of coverage before you reach four.'] },
      { h: 'How the premium is set', list: [
        'Your payroll, divided by 100, times the rate for your classification. Most repair shops are classified under NCCI code 8380 (automobile service or repair).',
        'An experience modifier once the shop is large enough, which raises or lowers the price based on your claims history.',
        'Separate classes for office staff or salespeople, which can lower the cost if they don’t work in the shop.'
      ] },
      { h: 'Ways to keep the cost down', list: [
        'Report payroll accurately by class so clerical staff aren’t rated as mechanics',
        'Keep a written safety program and lift inspection records',
        'Report injuries quickly and have a return-to-work plan',
        'Pay as you go, with premiums based on each payroll, to avoid a large audit bill'
      ] }
    ],
    faqs: [
      ['I have three employees. Do I need workers’ comp?', 'Florida doesn’t generally require it for a non-construction business with fewer than four employees, but one injury without it can cost far more than the policy. Many shops buy it early.'],
      ['Can I exempt myself as the owner?', 'Corporate officers of a non-construction business can usually elect to be exempt through the Florida Division of Workers’ Compensation. Sole proprietors and partners are generally not counted as employees.'],
      ['Does workers’ comp cover a customer hurt in my shop?', 'No. Workers’ comp covers your employees. A customer injury falls under garage liability.']
    ],
    related: ['autoRepair', 'garagekeepers'],
    cta: AUTO_CTA,
    note: AUTO_NOTE
  }
};

export const GUIDE_PAGES = Object.values(GUIDES).filter((g) => g.kind);
