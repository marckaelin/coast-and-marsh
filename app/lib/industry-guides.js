// Industry landing pages and guides rendered by app/components/GuidePage.js.
// Rules for this copy: never name a carrier or wholesaler, never promise coverage or price,
// and never tell a hemp retailer which products are legal. Re-check dated facts (marked below).

import { EMAIL_QUOTE_PRIVATE_CLIENT, EMAIL_QUOTE_HOME_CARE } from './email-quote';

const HEMP_NOTE = 'General information only, not legal advice, a quote or a coverage determination. Federal and Florida hemp rules are changing; dates reflect federal law as of November 2026. Ask an attorney which products you may sell. Eligibility, pricing and terms are set by the insurer.';
const AUTO_NOTE = 'General information only, not a quote or coverage determination. Coverage forms differ by insurer; read your policy for exact terms. Eligibility, pricing and terms are set by the insurer.';

const HEMP_CTA = { short: 'Get a review', label: 'Start a hemp shop review', href: '/smoke-shop-insurance', title: 'Want your policy checked before December 11?', text: 'Start the online review, or call or text 904-988-5026 with your renewal date.' };
const AUTO_CTA = { short: 'Text for a quote', label: 'Text QUOTE to 904-988-5026', href: 'sms:+19049885026?body=QUOTE', title: 'Want your shop insurance put in front of more carriers?', text: 'Text QUOTE to 904-988-5026 and answer six quick questions. No forms.' };

const PEST_NOTE = 'General information only, not legal advice, a quote or a coverage determination. License insurance minimums reflect section 482.071, Florida Statutes, as of November 2026; confirm current requirements with FDACS. Eligibility, pricing and terms are set by the insurer.';
const PEST_CTA = { short: 'Call for a quote', label: 'Call or text 904-988-5026', href: 'tel:+19049885026', title: 'Want your pest control insurance put in front of more carriers?', text: 'Call or text 904-988-5026, or email your current declarations page to marc.kaelin@coastandmarsh.com.' };

const HOMECARE_NOTE = 'General information only, not legal advice, a quote or a coverage determination. Franchise requirements summarized here come from publicly filed franchise disclosure documents (Senior Helpers, April 2025; Visiting Angels and Home Instead, April 2026) and may have changed; your signed agreement and operations manual control. Coast & Marsh is not affiliated with or endorsed by any franchisor. Eligibility, pricing and terms are set by the insurer.';
const HOMECARE_CTA = { short: 'Get your quote', label: 'Get your quote', href: '/home-care-agency-insurance#quote', title: 'Want a quote built to your franchise agreement?', text: 'Pick your franchise or independent agency, see the requirements, and get a quote by email or text. Or call or text 904-988-5026.' };

const LOCAL_NOTE = 'General information only, not a quote or coverage determination. Coverage needs depend on your business, lease and contracts. Eligibility, pricing and terms are set by the insurer.';
const LOCAL_CTA = { short: 'Call for a quote', label: 'Call or text 904-988-5026', href: 'tel:+19049885026', title: 'Want your business insurance reviewed?', text: 'Call or text 904-988-5026, or email your current declarations page or lease insurance section to marc.kaelin@coastandmarsh.com.' };

const PRIVATE_NOTE = 'General information only, not a quote, legal advice or a coverage determination. Florida rules summarized here reflect our understanding as of November 2026; policy terms differ by insurer. Eligibility, pricing and terms are set by the insurer. We do not promise savings or coverage.';
const PRIVATE_CTA = { short: 'Request a review', label: 'Request a Coastal Coverage Review', href: '/private-client#review', title: 'Want your coverage looked at together?', text: 'Request a review online, call or text 904-988-5026, or email marc.kaelin@coastandmarsh.com.' };

export const GUIDES = {
  // ---------- Hemp, CBD and smoke shops ----------
  hempStore: {
    kind: 'service',
    segment: 'hemp',
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
    related: ['hempDec11', 'hempReadiness', 'hempProducts', 'smokeReview'],
    cta: HEMP_CTA,
    note: HEMP_NOTE
  },
  hempDec11: {
    kind: 'article',
    segment: 'hemp',
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
    related: ['hempReadiness', 'hempStore', 'hempProducts', 'smokeReview'],
    cta: HEMP_CTA,
    note: HEMP_NOTE
  },
  hempReadiness: {
    kind: 'article',
    segment: 'hemp',
    date: '2026-11-05',
    parent: 'hempStore',
    path: '/guides/hemp-december-11-checklist',
    eyebrow: 'HEMP SHOP INSURANCE',
    title: 'December 11 Hemp Change: A Checklist for Florida Shop Owners',
    metaTitle: 'December 11 Hemp Change Checklist for Florida Hemp and CBD Shops',
    description: 'A plain-English readiness guide for Florida hemp, CBD and smoke shop owners: what the December 11, 2026 federal hemp change is, whether it affects your store, a week-by-week timeline, a checklist, staff talking points and where to get help.',
    lead: 'The federal definition of hemp changes on December 11, 2026. If you own a Florida hemp, CBD or smoke shop, this guide walks you through it the way a business would plan any big change: what is changing, whether it affects you, what to do and when, and who to call.',
    sections: [
      { h: 'What is changing', list: [
        'Hemp will be measured by total THC, including THCA and delta-8, not delta-9 alone.',
        'A finished product with more than 0.4 mg of total THC per container will no longer count as hemp under federal law. That covers most THCA flower and most THC gummies, drinks and vapes.',
        'Synthetic cannabinoids that the plant can’t naturally produce lose hemp status earlier, on November 12, 2026.',
        'Florida’s own hemp rules still apply on top of the federal change, including your FDACS hemp food establishment permit, the age-21 sales rule and certificates of analysis.'
      ], p: ['Status as of November 5, 2026: the December 11 date stands. Congress already moved it once, from November 12, and bills to delay, repeal or regulate instead are pending. Federal funding also runs out on December 11, so watch for news in early December.'] },
      { h: 'Does this affect your store?', p: ['Answer these five questions. If you answer yes to any of the first three, plan for the change now.'], list: [
        'Do THCA flower, delta-8, delta-9 or other THC products make up any of your sales?',
        'Do you sell private-label or house-brand products with your store’s name on them?',
        'Do you have more than a few weeks of THC inventory on hand or on order?',
        'Do you know what share of your sales each product type makes up?',
        'Do you know your insurance renewal date and what your policy says about hemp and THC products?'
      ] },
      { h: 'What it means for your business', grid: [
        ['Inventory', 'Products over the limit that are still on your shelves or in the back after December 11 are a legal and insurance risk. Plan to sell through, return or stop reordering them.'],
        ['Sales mix', 'If THC products are a big share of sales, revenue will drop unless CBD, accessories or other lines make up the difference. Know your numbers now.'],
        ['Suppliers', 'Ask each supplier what they will stop making, whether they will take returns and whether their products liability insurance stays in place.'],
        ['Staff and customers', 'Customers will ask what is still for sale. Clerks need a short, consistent answer and should never give legal advice.']
      ] },
      { h: 'What it means for your insurance', grid: [
        ['Exclusions', 'Insurers are adding THC and hemp exclusions or rewriting policy forms, often at renewal.'],
        ['Products liability', 'A claim can arrive months after a sale. Ask whether products you sold before December 11 are still covered.'],
        ['Inventory', 'Property insurance usually won’t pay for goods that are illegal to own, so reclassified stock may not be covered after a theft or fire.'],
        ['Cancellation and renewal', 'Some hemp policies written this fall have been cancelled, and some markets have paused new hemp business until after December 11.']
      ], link: 'hempDec11' },
      { h: 'Timeline', steps: [
        ['Now', 'Pull your policy and declarations page, note your renewal date, and work out your sales mix by product type.'],
        ['By November 11', 'Remove any synthetic cannabinoid products. Stop reordering THC products you won’t be able to sell after December 11.'],
        ['November 12 to December 10', 'Sell through or arrange returns of THC inventory. Brief your staff. Save invoices and certificates of analysis. Ask your insurer or agent how your policy treats the change.'],
        ['December 11', 'The new federal definition takes effect. Products over the limit should be off your shelves.'],
        ['After December 11 and at renewal', 'Read every endorsement and renewal offer before you accept it. Keep your records, and re-check your coverage if your product mix changes.']
      ] },
      { h: 'Checklist', checklist: [
        'I know my insurance renewal date',
        'I have a copy of my current policy and declarations page',
        'I know what share of my sales is CBD, THC products, vape and tobacco, kratom and accessories',
        'I have asked my attorney which products I can keep selling',
        'I have a plan to sell through or return THC inventory before December 11',
        'I have asked my suppliers about returns and their own products liability coverage',
        'I am saving invoices and certificates of analysis for everything sold before December 11',
        'My staff know what is coming off the shelves, when, and what to tell customers',
        'I have read any notice or endorsement my insurer has sent',
        'I have had my coverage reviewed for the change'
      ] },
      { h: 'What to tell your staff', p: ['Give clerks three simple points, and tell them to send any legal question to you.'], list: [
        'Which products are coming off the shelves, and on what date',
        'What the store still sells, and which products to suggest instead',
        'That the store still checks ID for everyone under 21, and that they should never guess about what is legal'
      ] },
      { h: 'Where to get help', grid: [
        ['An attorney', 'Which products you may sell, and what to do with what you have left. An insurance agent can’t answer that.'],
        ['FDACS', 'Your Florida hemp food establishment permit, labeling and testing rules.'],
        ['Your suppliers', 'What they will still make, returns and certificates of analysis.'],
        ['Your insurance agent', 'What your policy covers now, what changes at renewal, and whether other markets are a better fit.']
      ] }
    ],
    faqs: [
      ['When does the federal hemp change take effect?', 'December 11, 2026 for most products, after Congress moved it from November 12. Synthetic cannabinoids lose hemp status on November 12, 2026. Bills to delay it again are pending, so check the news in early December.'],
      ['Can I still sell CBD after December 11?', 'Products with 0.4 mg or less of total THC per container still count as hemp under the federal definition, and most CBD-dominant stores will keep operating. Ask an attorney about your specific products.'],
      ['What happens to claims for products I sold before December 11?', 'It depends on your policy. Some insurers are adding endorsements for products that were legal when made or sold. Keep your invoices and certificates of analysis, and ask your agent to confirm in writing.'],
      ['Will my insurance be cancelled?', 'Not automatically, but some insurers are cancelling, adding exclusions or not renewing hemp policies. Know your renewal date and read every notice you get.'],
      ['Do I still need to follow Florida’s hemp rules?', 'Yes. Florida’s FDACS permit, age-21, labeling and testing rules still apply alongside the federal change.']
    ],
    related: ['hempDec11', 'hempStore', 'hempProducts', 'smokeReview'],
    cta: { ...HEMP_CTA, title: 'Want a free policy review before December 11?', text: 'Start the online review, or call or text 904-988-5026 with your renewal date. It takes about 15 minutes.' },
    emailSubject: 'December 11 hemp policy review',
    note: HEMP_NOTE
  },
  hempProducts: {
    kind: 'article',
    segment: 'hemp',
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
    related: ['hempStore', 'hempDec11', 'hempReadiness', 'smokeReview'],
    cta: HEMP_CTA,
    note: HEMP_NOTE
  },
  smokeReview: { path: '/smoke-shop-insurance', title: 'Smoke shop, vape and hemp insurance review' },

  // ---------- Auto repair shops ----------
  autoRepair: {
    kind: 'service',
    segment: 'autoRepair',
    serviceType: 'Auto repair shop insurance',
    path: '/auto-repair-shop-insurance',
    eyebrow: 'AUTO REPAIR SHOP INSURANCE',
    title: 'Auto Repair Shop Insurance in Florida',
    description: 'Insurance for Florida auto repair, mechanic, tire, transmission and body shops: garage liability, garagekeepers, workers’ comp, property and tools, and what insurers ask.',
    lead: 'Coast & Marsh insures Florida repair, tire, transmission and body shops, including new shops, shops with past claims and shops another agent couldn’t place. Every shop needs coverage for two different things: injuries and damage caused by your work, and the customer cars sitting in your bays and on your lot. Many have the first and are thin on the second.',
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
    segment: 'autoRepair',
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
    segment: 'autoRepair',
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
  },
  // ---------- Pest control and termite ----------
  pestControl: {
    kind: 'service',
    segment: 'pest',
    group: 'pest',
    serviceType: 'Pest control insurance',
    path: '/pest-control-insurance',
    eyebrow: 'PEST CONTROL INSURANCE',
    title: 'Pest Control and Termite Company Insurance in Florida',
    description: 'Insurance for Florida pest control, termite and lawn and ornamental companies: general liability with pesticide coverage, termite and WDO errors and omissions, pollution, commercial auto, workers’ comp and the FDACS license insurance minimum.',
    lead: 'A standard general liability policy usually excludes the things a pest control company actually does: applying pesticides, and promising that a house is free of termites. Florida pest and termite companies need a program written for the trade.',
    sections: [
      { h: 'Florida license insurance requirement', p: ['Under section 482.071 of the Florida Statutes, a pest control business can’t operate without insurance. The minimum is $250,000 per person and $500,000 per occurrence for bodily injury, plus $250,000 per occurrence and $500,000 aggregate for property damage, or a $500,000 combined single limit. Each business location is licensed separately by FDACS, and a certificate of insurance is due with every application and annual renewal.'] },
      { h: 'Coverage pest control companies usually need', grid: [
        ['General liability with pesticide coverage', 'Injury or damage from your work, including pesticide and herbicide applications. Many standard policies exclude pesticides, so confirm it is covered.'],
        ['Termite and WDO errors and omissions', 'Claims that you missed termites or damage, or that a treatment or termite bond didn’t work. This is usually the biggest exposure for termite companies.'],
        ['Pollution liability', 'Drift, spills and contamination from the chemicals you store and apply, which general liability often excludes.'],
        ['Commercial auto, workers’ comp and equipment', 'Service trucks with chemical tanks, technicians in attics and crawlspaces, and rigs, sprayers and fumigation equipment.']
      ] },
      { h: 'What insurers ask', list: [
        'Your mix of work: general household pest, termite (subterranean and drywood), fumigation, WDO inspections for real estate, lawn and ornamental, mosquito, commercial accounts',
        'Annual sales by type of work, number of technicians and service vehicles',
        'Your FDACS license and certified operator, years in business and claims history',
        'Termite bonds or warranties you offer, and how you document inspections and treatments'
      ], p: ['Fumigation and real estate WDO inspections change the price the most, so mention them up front.'] }
    ],
    faqs: [
      ['How much insurance does a Florida pest control license require?', 'Section 482.071 requires bodily injury coverage of $250,000 per person and $500,000 per occurrence plus property damage of $250,000 per occurrence and $500,000 aggregate, or a $500,000 combined single limit. Many commercial customers ask for $1,000,000 per occurrence.'],
      ['Does general liability cover termite claims?', 'Usually not by itself. Claims that you missed termites, or that a treatment failed, are typically excluded from general liability and need termite or WDO errors and omissions coverage.'],
      ['Can a new pest control company get insurance?', 'Yes. Specialty pest control programs write startups, especially when the certified operator has experience. Expect questions about the work mix and whether you will do termite work in year one.'],
      ['Do you work with pest control companies across Florida?', 'Yes. Coast & Marsh is an independent agency in Ponte Vedra Beach with access to specialty pest control insurance programs and serves companies statewide.']
    ],
    related: ['termiteWdo', 'pestPollution'],
    cta: PEST_CTA,
    note: PEST_NOTE
  },
  termiteWdo: {
    kind: 'article',
    segment: 'pest',
    group: 'pest',
    date: '2026-11-03',
    parent: 'pestControl',
    path: '/guides/termite-wdo-errors-and-omissions-insurance',
    eyebrow: 'PEST CONTROL INSURANCE',
    title: 'Termite and WDO Inspection Errors and Omissions Insurance',
    description: 'How errors and omissions insurance works for Florida termite companies and wood-destroying organism (WDO) inspectors: real estate inspection claims, treatment failures, termite bonds and how to reduce claims.',
    lead: 'Termite claims rarely come from something you did on the job site. They come from something you missed, or a treatment that didn’t hold. That is professional liability, and in Florida it is the biggest risk a termite company carries.',
    sections: [
      { h: 'Where termite claims come from', grid: [
        ['Real estate WDO inspections', 'A buyer closes on a house with a clean WDO report, then finds termite damage behind the drywall and sues the inspector.'],
        ['Treatment failures', 'Termites return after a treatment, and the homeowner claims the damage you should have prevented.'],
        ['Termite bonds and warranties', 'A repair bond or retreatment warranty is a promise. Claims under it can exceed what you charged for years of renewals.'],
        ['Fumigation', 'Tent fumigation brings its own risks: re-entry injuries, damaged roofs and plants, and theft during the tent period.']
      ] },
      { h: 'What termite E&O covers', p: ['Errors and omissions (professional liability) covers claims that your inspection, report or treatment was wrong or incomplete, including defense costs. General liability normally excludes these claims. Some policies cover inspections but not treatment failures, or exclude damage covered by a repair bond, so read the wording.'] },
      { h: 'How to reduce termite claims', list: [
        'Use the current FDACS wood-destroying organisms inspection report form and note every area you couldn’t access',
        'Photograph conditions at each inspection and treatment, and keep the records for years',
        'Put the limits of a bond or warranty in writing, and know whether it is retreatment-only or includes repairs',
        'Keep annual re-inspection records for every active bond'
      ] }
    ],
    faqs: [
      ['Do WDO inspectors in Florida need errors and omissions insurance?', 'State law sets general liability minimums for pest control licensees, and E&O is not part of that minimum. Most termite companies and inspectors carry it anyway, because missed-damage claims after a home sale are common and general liability usually excludes them.'],
      ['Does termite E&O cover a repair bond?', 'It depends on the policy. Some cover retreatment and repair claims under your contracts, and some exclude damage you promised to repair. Ask before you sell repair bonds.'],
      ['Is fumigation covered under a normal pest control policy?', 'Not always. Fumigation is often rated or endorsed separately. Tell your agent if you tent houses yourself or subcontract it.']
    ],
    related: ['pestControl', 'pestPollution'],
    cta: PEST_CTA,
    note: PEST_NOTE
  },
  pestPollution: {
    kind: 'article',
    segment: 'pest',
    group: 'pest',
    date: '2026-11-03',
    parent: 'pestControl',
    path: '/guides/pesticide-pollution-liability-insurance',
    eyebrow: 'PEST CONTROL INSURANCE',
    title: 'Pesticide and Pollution Liability for Pest Control Companies',
    description: 'Why Florida pest control and lawn care companies need pesticide and pollution liability: drift, spills, misapplication, the pollution exclusion in general liability, and vehicle spills.',
    lead: 'Most general liability policies have a pollution exclusion, and to an insurer a pesticide can be a pollutant. If your policy wasn’t written for pest control, a drift or spill claim may not be covered at all.',
    sections: [
      { h: 'Claims that start with a chemical', list: [
        'Drift onto a neighbor’s garden, pool, fish pond or bees',
        'A customer or pet reacting to a treatment',
        'Misapplication: the wrong product, rate or location',
        'A spill from a service truck or at your shop that reaches soil or a storm drain',
        'Damage to lawns and ornamentals from herbicides'
      ] },
      { h: 'How coverage is usually built', grid: [
        ['Pesticide or herbicide applicator coverage', 'An endorsement or program form that puts back coverage for your applications, which a standard pollution exclusion takes away.'],
        ['Contractor’s pollution liability', 'Broader coverage for pollution from your operations at customers’ sites, including clean-up costs.'],
        ['Auto pollution', 'Spills from vehicles in transit are often excluded from both the auto policy and general liability unless added back.'],
        ['Premises pollution', 'Your shop or chemical storage area, if you keep bulk product on site.']
      ] },
      { h: 'Records that help after a claim', p: ['Keep application records: product, rate, location, weather and the technician’s license number. Florida already requires many of these records, and they are often the best defense against a drift or misapplication claim.'] }
    ],
    faqs: [
      ['Does my general liability cover pesticide drift?', 'Only if the policy was written for pest control or has a pesticide or herbicide applicator endorsement. Standard policies often exclude it under the pollution exclusion.'],
      ['Do lawn care companies need pollution coverage?', 'If you apply fertilizer with pesticides or herbicides, yes. Lawn and ornamental work has the same drift and misapplication risks.'],
      ['Is a chemical spill from my truck covered?', 'Often not, unless your auto or pollution policy specifically covers pollution in transit. Ask your agent to confirm.']
    ],
    related: ['pestControl', 'termiteWdo'],
    cta: PEST_CTA,
    note: PEST_NOTE
  },
  // ---------- Home care and home health agencies ----------
  homeCare: {
    kind: 'service',
    segment: 'homeCare',
    group: 'homecare',
    serviceType: 'Home care agency insurance',
    quoteFlow: 'homecare',
    path: '/home-care-agency-insurance',
    eyebrow: 'HOME CARE AGENCY INSURANCE',
    title: 'Home Care Agency Insurance in Florida',
    metaTitle: 'Home Care Agency Insurance in Florida: Franchisees and Independents',
    description: 'Insurance for Florida home care agencies, companion and homemaker providers, home health agencies and home care franchisees: general and professional liability, abuse and molestation, hired and non-owned auto, workers’ comp, client theft bonds, umbrella, EPLI and cyber, quoted to your franchise agreement.',
    lead: 'Your caregivers work alone in clients’ homes, often drive their own cars, and sometimes handle a client’s money or medications. A home care agency needs a package written for care work, with limits that match your franchise agreement or contracts. Tell us your annual revenue and caregiver count, and we’ll build the quote to your requirements.',
    sections: [
      { h: 'Who we work with', grid: [
        ['Non-medical home care', 'Companion and homemaker agencies registered with AHCA, and agencies that add personal care such as bathing, dressing and mobility help.'],
        ['Home health agencies', 'Licensed home health agencies providing skilled nursing and therapy in the home, alongside aide and personal care services.'],
        ['Home care franchisees', 'Owners of national home care franchise locations who need every line to match the insurance section of their franchise agreement.'],
        ['Multi-location independents', 'Independent agencies with several offices or counties under one owner, where one program and one renewal date make life simpler.']
      ] },
      { h: 'Coverage home care agencies usually need', grid: [
        ['General and professional liability', 'Injury or property damage in a client’s home, and claims that care was given wrongly or not at all. Franchise agreements commonly ask for $1,000,000 per occurrence and $3,000,000 aggregate on each.'],
        ['Abuse and molestation', 'Allegations of abuse against a caregiver. Many general liability policies exclude it or cap it at a small sublimit, so it has to be added on purpose.'],
        ['Hired and non-owned auto', 'Caregivers drive to visits and run errands, and some drive clients. If there is a crash, the agency can be sued too. This covers the agency’s liability when staff use their own cars.'],
        ['Workers’ compensation', 'Lifting and transferring clients makes back and shoulder injuries common. Florida generally requires it once a non-construction business has four employees, and franchise agreements usually require it regardless.'],
        ['Client theft (third-party crime) bond', 'Pays when a caregiver steals from a client. It is not the same as a license or surety bond, and franchise agreements often ask for $25,000.'],
        ['Umbrella, EPLI and cyber', 'Extra liability limits over general, professional, auto and employer’s liability; employment practices liability for a large hourly workforce; and cyber for client health and payment records.']
      ] },
      { h: 'A straight package, quoted to your requirements', p: [
        'Start with a few numbers: annual revenue, caregiver count, the services you provide and where you operate. We come back with an indication first, and only ask for a full application when you are ready to bind.',
        'If you are a franchisee, send the insurance section of your franchise agreement and we check the quote against it line by line before you see it, so your certificate of insurance isn’t sent back.'
      ], list: [
        'The limit required for each line, including abuse and molestation, crime and cyber',
        'Any minimum carrier rating your agreement requires',
        'Additional insured wording for the franchisor and its affiliates, such as ISO form CG 20 26',
        'Primary and non-contributory wording and waiver of subrogation',
        'Notice of cancellation to the franchisor, and the deadline for proof of coverage'
      ], link: 'homeCareFranchise' },
      { h: 'What underwriters ask', list: [
        'The services you provide: companion and homemaker, personal care, skilled nursing or therapy, and any specialty care such as dementia or overnight care',
        'Annual revenue and billable hours, and how many caregivers you have',
        'Whether caregivers are W-2 employees or independent contractors',
        'Whether caregivers drive clients, run errands, or handle clients’ money or medications',
        'Hiring and supervision: Level 2 background screening, reference and driving record checks, training and visit verification',
        'Your AHCA license or registration, years in business, locations and claims history'
      ], p: ['Whether caregivers transport clients, and whether they are employees or contractors, change the price and the number of markets the most, so mention them up front.'] },
      { h: 'Florida details that matter', p: [
        'Florida home health agencies are licensed by the Agency for Health Care Administration (AHCA), and companion and homemaker providers register with AHCA. Each license or registration has an expiration date, so keep your certificate of insurance current before each renewal.',
        'Medicaid managed care plans, VA community care, hospitals and senior living communities that refer clients often set their own insurance requirements. Send us the contract language and we’ll make sure the quote meets it.'
      ] }
    ],
    faqs: [
      ['What insurance does a home care agency need in Florida?', 'Most agencies carry general and professional liability, abuse and molestation coverage, hired and non-owned auto, workers’ compensation, and a client theft (third-party crime) bond. Many also carry umbrella, employment practices liability and cyber, especially franchisees whose agreements require them.'],
      ['Does general liability cover a caregiver accused of abuse?', 'Often not. Many general liability policies exclude abuse and molestation or limit it to a small sublimit. Home care agencies usually need abuse and molestation coverage added to the general or professional liability policy.'],
      ['Do I need commercial auto if caregivers drive their own cars?', 'You need hired and non-owned auto liability. The caregiver’s personal auto policy pays first, but the agency can be sued after a crash during work, and hired and non-owned auto covers the agency’s liability. If the agency owns vehicles, those need a commercial auto policy.'],
      ['Is a client theft bond the same as a surety bond?', 'No. A client theft or third-party crime bond pays when an employee steals from a client. A license or surety bond guarantees that you follow a law or contract. Franchise agreements usually ask for the client theft kind.'],
      ['Do home care agencies need workers’ comp in Florida?', 'Florida generally requires workers’ compensation once a non-construction business has four or more employees, including part-time workers. Home care franchise agreements usually require it regardless of headcount.'],
      ['Can you quote to my franchise agreement?', 'Yes. Send the insurance section of your franchise agreement or operations manual, and we check every limit, rating and endorsement against it before we send the quote. Coast & Marsh is an independent agency and is not affiliated with or endorsed by any franchisor.'],
      ['Do you work with home care agencies across Florida?', 'Yes. Coast & Marsh is an independent agency in Ponte Vedra Beach and works with home care and home health agencies statewide, by phone and email.']
    ],
    related: ['homeCareAhca', 'homeCareFranchise', 'homeCareAbuse', 'homeCareAuto'],
    cta: HOMECARE_CTA,
    emailItems: EMAIL_QUOTE_HOME_CARE,
    emailSubject: 'Home care agency insurance quote',
    note: HOMECARE_NOTE
  },
  homeCareFranchise: {
    kind: 'article',
    segment: 'homeCare',
    group: 'homecare',
    date: '2026-11-20',
    parent: 'homeCare',
    path: '/guides/home-care-franchise-insurance-requirements',
    eyebrow: 'HOME CARE AGENCY INSURANCE',
    title: 'Home Care Franchise Insurance Requirements: A Guide for Florida Franchisees',
    metaTitle: 'Home Care Franchise Insurance Requirements for Florida Franchisees',
    description: 'What home care franchise agreements typically require for insurance, from the 2025 and 2026 franchise disclosure documents of Visiting Angels, Home Instead and Senior Helpers: limits by line, carrier rating, additional insured, primary and non-contributory, notice and proof deadlines.',
    lead: 'Every home care franchise agreement has an insurance section, and a certificate that misses one line can hold up training, opening or renewal. Here is what three of the largest home care franchise systems ask for in their current franchise disclosure documents, and the fine print that most often causes a certificate to be sent back.',
    sections: [
      { h: 'Limits by line', p: ['From the franchise disclosure documents issued by Visiting Angels (April 2026), Home Instead (April 2026) and Senior Helpers (April 2025). Your signed agreement and operations manual control.'], grid: [
        ['General liability', 'All three: $1,000,000 per occurrence and $3,000,000 aggregate. Senior Helpers also lists personal injury and property damage limits of $1,000,000.'],
        ['Professional liability', 'All three: $1,000,000 per occurrence or incident and $3,000,000 aggregate.'],
        ['Abuse and molestation', 'Visiting Angels: $500,000. Home Instead and Senior Helpers don’t list it in the franchise agreement, but an operations manual or a referral contract may.'],
        ['Auto', 'All three: $1,000,000 including hired and non-owned auto, and owned autos if you have them.'],
        ['Umbrella or excess', 'Visiting Angels: $1,000,000 over professional, general, auto and employer’s liability. Home Instead: $1,000,000. Senior Helpers: “reasonable” excess may be required.'],
        ['Workers’ comp and employer’s liability', 'All three require it. Visiting Angels and Home Instead require it even where state law wouldn’t.'],
        ['Client theft or crime bond', 'All three: $25,000. Senior Helpers allows a $2,500 deductible, or a higher amount if the state or operations manual requires one.'],
        ['EPLI and cyber', 'EPLI of $500,000 in all three (Home Instead: $500,000 per claim, $1,000,000 aggregate). Cyber of $500,000 for Visiting Angels and Senior Helpers.']
      ] },
      { h: 'The fine print that gets certificates sent back', list: [
        'Carrier rating: Home Instead requires carriers rated A or better by AM Best (workers’ comp excepted) and “satisfactory to” the franchisor. A quote from a lower-rated carrier won’t work no matter the price.',
        'Additional insured: the franchisor, and often its affiliates, officers and directors. Senior Helpers names ISO form CG 20 26 for ongoing and completed operations. Visiting Angels asks for additional insured status on professional, general and EPLI.',
        'Primary and non-contributory: Home Instead asks for coverage on a primary basis, and Senior Helpers asks for primary and non-contributory.',
        'Waiver of subrogation: Home Instead and Senior Helpers ask for it.',
        'Notice: Home Instead and Senior Helpers require 30 days’ notice to the franchisor before cancellation or a material change. Visiting Angels requires you to report changes within 10 days.',
        'Proof deadline: Visiting Angels wants proof before you attend training. Home Instead wants a certificate within 90 days of signing and every year after.'
      ] },
      { h: 'Do you have to use the franchisor’s insurance program?', p: [
        'Not under these three disclosure documents. Visiting Angels says it does not designate insurance suppliers and that its vendor list is optional. Senior Helpers lets franchisees choose their own agent and carrier. Home Instead does not require a program today, but its disclosure document says its parent company is expected to become the designated sole supplier of insurance services in the future.',
        'Check Item 8 of your own disclosure document and your current operations manual before you change agents, because these rules can change between editions.'
      ] },
      { h: 'If coverage lapses', p: ['All three franchisors can buy coverage for you and bill you for it, and Visiting Angels and Senior Helpers can add fees. A lapse can also be grounds to terminate the franchise. Put your renewal date on the calendar and send the new certificate before the old one expires.'] },
      { h: 'Starting a franchise location', p: ['Each disclosure document estimates first-year insurance costs in Item 7, but the estimates vary widely and some leave out workers’ comp. Ask for an indication before you open so your budget reflects your revenue, caregiver count and the limits you actually need.'], link: 'homeCare' }
    ],
    faqs: [
      ['How much general liability does a home care franchise require?', 'Visiting Angels, Home Instead and Senior Helpers all ask for $1,000,000 per occurrence and $3,000,000 aggregate in general liability, and the same limits in professional liability, in their current disclosure documents. Your signed agreement controls.'],
      ['Do home care franchisees have to buy insurance from the franchisor?', 'Not under the current Visiting Angels, Home Instead or Senior Helpers disclosure documents. Home Instead says its parent company may become the sole insurance supplier in the future, so check Item 8 of your disclosure document.'],
      ['Why was my certificate of insurance rejected by my franchisor?', 'The usual reasons are a missing line such as abuse and molestation, cyber or EPLI, a limit below the requirement, a carrier below the required rating, or missing additional insured, primary and non-contributory or waiver of subrogation wording.'],
      ['Is Coast & Marsh a franchisor-approved insurance vendor?', 'No. Coast & Marsh is an independent Florida agency and is not affiliated with or endorsed by any franchisor. We read your franchise agreement and quote to its requirements.']
    ],
    related: ['homeCare', 'homeCareAbuse', 'homeCareAuto'],
    cta: HOMECARE_CTA,
    emailItems: EMAIL_QUOTE_HOME_CARE,
    emailSubject: 'Home care franchise insurance quote',
    note: HOMECARE_NOTE
  },
  homeCareAbuse: {
    kind: 'article',
    segment: 'homeCare',
    group: 'homecare',
    date: '2026-11-20',
    parent: 'homeCare',
    path: '/guides/home-care-abuse-molestation-and-client-theft-coverage',
    eyebrow: 'HOME CARE AGENCY INSURANCE',
    title: 'Abuse, Molestation and Client Theft Coverage for Home Care Agencies',
    description: 'How abuse and molestation coverage and client theft (third-party crime) bonds work for Florida home care agencies: exclusions and sublimits in general liability, who is covered, crime bonds versus surety bonds, and hiring practices underwriters look for.',
    lead: 'The two claims home care owners worry about most are an abuse allegation against a caregiver and a client’s jewelry or money going missing. Neither is covered by a standard general liability policy. Here is how each is usually insured.',
    sections: [
      { h: 'Abuse and molestation coverage', grid: [
        ['Why general liability isn’t enough', 'Many general liability policies exclude abuse and molestation entirely, or cover it only up to a small sublimit. Home care agencies usually need it added on purpose.'],
        ['Where it sits', 'It may be part of the general or professional liability policy, or a separate coverage part with its own limit. Check whether its limit is shared with the rest of the policy.'],
        ['Who it protects', 'Policies cover the agency for claims of negligent hiring, supervision or retention. Most won’t defend the person who actually committed the act.'],
        ['Claims-made or occurrence', 'Abuse claims can be reported years later. If the coverage is claims-made, know your retroactive date and keep coverage continuous when you change insurers.']
      ] },
      { h: 'Client theft and crime coverage', grid: [
        ['Client theft (third-party crime) bond', 'Pays when an employee steals money or property from a client. This is the bond home care franchise agreements and many clients ask for.'],
        ['Employee dishonesty', 'Covers theft from your own agency, such as payroll or billing fraud. Some policies combine it with client theft; others don’t.'],
        ['Surety or license bonds', 'Guarantee that you follow a law or contract, such as a Medicaid or Medicare requirement. They are not theft coverage, and the surety can collect from you after a claim.'],
        ['Conviction requirements', 'Some crime bonds pay only after the employee is convicted, which can take months. Look for one that pays on proof of loss.']
      ] },
      { h: 'Practices underwriters look for', list: [
        'Level 2 background screening for every caregiver, as Florida requires for home care staff, plus reference checks',
        'A written abuse prevention, reporting and investigation policy, with training at hire and every year',
        'Supervisory visits and electronic visit verification',
        'A rule that caregivers never take over a client’s finances, credit cards or banking',
        'An inventory or photos of valuables at the start of service, and a process for client complaints'
      ], p: ['Good practices make an agency easier to place and are the best defense if a claim is ever made.'] }
    ],
    faqs: [
      ['Does home care general liability include abuse and molestation coverage?', 'Not always. Many policies exclude it or cap it at a low sublimit. Ask for abuse and molestation coverage by name and confirm the limit on the declarations page.'],
      ['How much abuse and molestation coverage do home care agencies carry?', 'It varies with size and contracts. Visiting Angels’ current franchise disclosure document requires $500,000, and some referral sources ask for more. Larger agencies often carry higher limits.'],
      ['Is a fidelity bond the same as client theft coverage?', 'Not necessarily. Some fidelity or employee dishonesty coverage covers only theft from the agency. Home care agencies need third-party coverage that pays when an employee steals from a client.'],
      ['Will a crime bond pay if the caregiver isn’t convicted?', 'It depends on the wording. Some bonds require a conviction, while others pay on proof of the loss. Ask before you buy.']
    ],
    related: ['homeCare', 'homeCareFranchise', 'homeCareAuto'],
    cta: HOMECARE_CTA,
    emailItems: EMAIL_QUOTE_HOME_CARE,
    emailSubject: 'Home care agency insurance quote',
    note: HOMECARE_NOTE
  },
  homeCareAuto: {
    kind: 'article',
    segment: 'homeCare',
    group: 'homecare',
    date: '2026-11-20',
    parent: 'homeCare',
    path: '/guides/hired-and-non-owned-auto-insurance-home-care',
    eyebrow: 'HOME CARE AGENCY INSURANCE',
    title: 'Hired and Non-Owned Auto Insurance for Home Care Agencies',
    description: 'How auto liability works when Florida home care caregivers drive their own cars to visits, run errands or drive clients: whose policy pays first, what hired and non-owned auto covers, and what to check on every caregiver.',
    lead: 'Most home care agencies don’t own a single vehicle, yet driving is one of their biggest risks. Caregivers drive between visits, run errands and often take clients to appointments. When there is a crash, the injured person can sue the agency as well as the driver.',
    sections: [
      { h: 'Whose policy pays first', p: ['When a caregiver drives a personal car for work, the caregiver’s own auto policy usually pays first. Florida’s minimum auto insurance is low, though: personal injury protection and property damage liability, with no bodily injury liability required for most drivers. A serious crash can go far past what the caregiver carries, and the claim moves to the agency.'] },
      { h: 'What hired and non-owned auto covers', grid: [
        ['The agency’s liability', 'Covers the agency when it is sued over a crash involving a car it doesn’t own, such as a caregiver’s personal car or a rental.'],
        ['Not the caregiver’s car', 'It doesn’t pay to repair the caregiver’s vehicle, and usually doesn’t protect the caregiver personally.'],
        ['Owned vehicles', 'If the agency owns or leases a car or van, it needs a commercial auto policy. Hired and non-owned auto doesn’t cover owned vehicles.'],
        ['Driving a client’s car', 'Some caregivers drive the client’s own car. The client’s auto policy is usually first in line, so ask how your policy treats it and put the arrangement in writing.']
      ] },
      { h: 'What to check on every caregiver who drives', list: [
        'A valid driver’s license and a motor vehicle record check at hire and every year',
        'Proof of personal auto insurance, kept on file and updated at each renewal',
        'Whether the caregiver drives clients, and how often',
        'A written policy on transporting clients, mobile phone use and seat belts',
        'Mileage logs if you reimburse mileage'
      ], p: ['Paying mileage doesn’t change whose insurance pays first, but it does show the driving was for work, which is why the agency can be pulled into the claim.'] },
      { h: 'Limits franchisors and contracts ask for', p: ['Home care franchise agreements commonly ask for $1,000,000 in auto liability including hired and non-owned auto, often with an umbrella on top. Medicaid plans and referral sources may set their own minimums.'], link: 'homeCareFranchise' }
    ],
    faqs: [
      ['Does my agency need auto insurance if we don’t own any cars?', 'Usually yes, in the form of hired and non-owned auto liability. It covers the agency if it is sued over a crash while a caregiver is driving a personal car for work.'],
      ['Does hired and non-owned auto cover the caregiver?', 'Generally not. It protects the agency. The caregiver’s personal auto policy covers the caregiver and their car.'],
      ['Is transporting clients covered?', 'It can be, but insurers price it differently and some programs limit it. Tell your agent whether caregivers drive clients and how often.'],
      ['What auto limit do home care franchises require?', 'The current Visiting Angels, Home Instead and Senior Helpers franchise disclosure documents each ask for $1,000,000 including hired and non-owned auto. Your signed agreement controls.']
    ],
    related: ['homeCare', 'homeCareFranchise', 'homeCareAbuse'],
    cta: HOMECARE_CTA,
    emailItems: EMAIL_QUOTE_HOME_CARE,
    emailSubject: 'Home care agency insurance quote',
    note: HOMECARE_NOTE
  },
  homeCareAhca: {
    kind: 'article',
    segment: 'homeCare',
    group: 'homecare',
    date: '2026-11-27',
    parent: 'homeCare',
    path: '/guides/home-health-agency-insurance-ahca-license-renewal',
    eyebrow: 'HOME CARE AGENCY INSURANCE',
    title: 'Home Health Agency Insurance for AHCA License Renewal: The $250,000 Rule',
    metaTitle: 'Florida Home Health Agency Insurance for AHCA Renewal ($250,000 Rule)',
    description: 'What section 400.471, Florida Statutes, requires a licensed home health agency to carry and prove to AHCA at every license renewal: malpractice and liability insurance of at least $250,000 per claim, what the certificate should show, and how to keep renewal from stalling.',
    lead: 'Every licensed home health agency in Florida has to show AHCA proof of malpractice and liability insurance with its initial application and with every license renewal. The legal minimum is modest, but a renewal held up over a certificate can cost far more than the premium. Here is what the law asks for, what most agencies actually carry, and a simple timeline so proof is ready before AHCA asks.',
    sections: [
      { h: 'What the law requires', p: [
        'Section 400.471(3), Florida Statutes, says a licensed home health agency must obtain and maintain insurance of not less than $250,000 per claim, and must submit proof of that coverage with its initial license application and with each application for license renewal. It names two coverages:'
      ], grid: [
        ['Malpractice (professional) liability', 'Claims that care was given wrongly, or not at all: a missed medication, a fall during a transfer, a wound that wasn’t reported. Defined in section 624.605(1)(k).'],
        ['General liability', 'Bodily injury or property damage that isn’t about the care itself, such as a caregiver breaking something in a client’s home. Defined in section 624.605(1)(b).']
      ] },
      { h: 'Who the $250,000 rule applies to', p: [
        'The rule in section 400.471 applies to home health agencies licensed under Part III of Chapter 400, the agencies that provide skilled nursing, therapy and home health aide services. Nurse registries and companion and homemaker providers are regulated under other sections (400.506 and 400.509) with their own rules, and many of them carry the same two coverages because referral sources and contracts ask for it.',
        'Workers’ compensation is a separate requirement under Chapter 440. Outside construction, Florida generally requires it once a business has four or more employees, and part-time caregivers count.'
      ] },
      { h: 'The minimum is rarely the right limit', p: [
        'The $250,000 per claim figure is a floor for licensure, not a recommendation. Most home health agencies carry $1,000,000 per claim or occurrence on both general and professional liability, because hospitals, Medicaid managed care plans, VA community care, senior living communities and franchise agreements commonly ask for it. Before your renewal, collect every contract that sets an insurance requirement and buy to the highest one.'
      ], link: 'homeCareFranchise' },
      { h: 'What the certificate should show', list: [
        'The agency’s legal name exactly as it appears on the AHCA license',
        'Professional (malpractice) liability and general liability, each with a per-claim or per-occurrence limit of at least $250,000',
        'Policy periods that are current on the date you submit the renewal',
        'Every location or branch covered, if you operate more than one office',
        'Whether professional liability is claims-made, and its retroactive date, so a change of insurer doesn’t leave a gap for past visits'
      ] },
      { h: 'A renewal timeline that works', steps: [
        ['90 days before the insurance renewal', 'Send current payroll, revenue, visit counts, services and claims to your agent, along with any contracts that set insurance minimums.'],
        ['60 days before', 'Review options side by side, including abuse and molestation, hired and non-owned auto and a client theft bond, not just the two lines AHCA asks about.'],
        ['30 days before', 'Bind coverage and get the certificate. If your AHCA license renewal falls in the same window, have the certificate ready before you file.'],
        ['Within a week of binding', 'Send updated certificates to referral sources and contracted plans that ask for them, so referrals don’t pause.']
      ] },
      { h: 'Common problems that stall renewal', list: [
        'The policy lapsed or was cancelled for non-payment between renewals',
        'Only general liability is in place, with professional liability missing or excluded for nursing services',
        'The named insured on the policy doesn’t match the licensed entity after a change of ownership or a new LLC',
        'Abuse and molestation is excluded, which AHCA may not ask about but referral partners and franchisors often do',
        'Claims-made professional liability replaced without prior acts coverage, leaving earlier visits uncovered'
      ] },
      { h: 'How Coast & Marsh helps', p: [
        'Coast & Marsh is an independent Florida agency. We put your coverage in front of our carriers, match it to your AHCA license and every contract that sets a requirement, and keep certificates moving so a renewal never waits on paperwork. The C&M Caregiver Package brings general and professional liability, abuse and molestation, hired and non-owned auto, workers’ comp and a client theft bond under one contact and one renewal conversation.'
      ], link: 'homeCare' }
    ],
    faqs: [
      ['How much insurance does a Florida home health agency need for its AHCA license?', 'Section 400.471(3), Florida Statutes, requires malpractice insurance and liability insurance of at least $250,000 per claim, with proof submitted with the initial license application and with each license renewal application.'],
      ['Do I have to send proof of insurance to AHCA at every renewal?', 'Yes. The statute requires proof of the malpractice and liability coverage with each application for license renewal, not just the first application.'],
      ['Is $250,000 enough coverage for a home health agency?', 'It meets the licensing minimum, but most agencies carry $1,000,000 per claim or more, because hospitals, Medicaid managed care plans, referral sources and franchise agreements commonly require higher limits.'],
      ['Does the $250,000 rule apply to companion and homemaker agencies or nurse registries?', 'Section 400.471 applies to licensed home health agencies. Nurse registries and companion and homemaker providers are covered by other sections of Chapter 400, though many carry the same coverages because contracts and referral partners require them.'],
      ['Does general liability alone satisfy AHCA?', 'No. The statute names both malpractice (professional) liability and general liability, each at $250,000 per claim or more.'],
      ['Can Coast & Marsh help before my AHCA renewal?', 'Yes. Send your renewal month, services, caregiver count and current declarations pages, and we will put your coverage in front of our carriers and have the certificate ready before you file.']
    ],
    related: ['homeCare', 'homeCareAbuse', 'homeCareAuto', 'homeCareFranchise'],
    cta: { ...HOMECARE_CTA, title: 'Renewing your AHCA license soon?', text: 'Tell us your renewal month and services, and we’ll have a certificate ready before you file. Or call or text 904-988-5026.' },
    emailItems: EMAIL_QUOTE_HOME_CARE,
    emailSubject: 'Home health agency insurance for AHCA renewal',
    note: 'General information only, not legal advice, a quote or a coverage determination. Statute references reflect the 2026 Florida Statutes (sections 400.471, 400.506, 400.509 and Chapter 440); confirm current requirements with AHCA. Eligibility, pricing and terms are set by the insurer.'
  },
  // ---------- Local and new business ----------
  localBusiness: {
    kind: 'service',
    segment: 'newBusiness',
    group: 'local',
    serviceType: 'Business insurance',
    path: '/business-insurance-ponte-vedra-beach-st-johns-county',
    eyebrow: 'PONTE VEDRA BEACH & ST. JOHNS COUNTY',
    title: 'Business Insurance in Ponte Vedra Beach and St. Johns County',
    metaTitle: 'Business Insurance Agent in Ponte Vedra Beach & St. Johns County',
    description: 'Independent business insurance agent in Ponte Vedra Beach, FL serving St. Johns County and Northeast Florida: general liability, business owner’s policies, workers’ comp, commercial auto and specialty coverage, with standard and surplus lines markets.',
    lead: 'Coast & Marsh is an independent insurance agency based in Ponte Vedra Beach. We work with businesses across St. Johns County, including Ponte Vedra, Nocatee, St. Johns, St. Augustine and the Jacksonville Beaches, and with clients across Florida.',
    sections: [
      { h: 'Who we work with', grid: [
        ['Contractors and trades', 'General, residential and specialty contractors, from new LLCs to established crews. See Florida contractor insurance.'],
        ['Auto repair and service businesses', 'Repair, tire and body shops that need garage liability and garagekeepers coverage for customer cars.'],
        ['Pest control, lawn and specialty services', 'Pest, termite and lawn and ornamental companies that need pesticide and errors and omissions coverage.'],
        ['Retail, offices and new businesses', 'Shops, offices and startups signing their first lease, plus hemp and CBD retailers that need specialty markets.']
      ] },
      { h: 'How we compare options', list: [
        'We start with what you do, your lease or contracts, and what your current policy actually covers',
        'We shop standard carriers and, when a risk needs it, specialty surplus lines markets through wholesale partners',
        'We show you the differences in coverage, not just the price, before you decide',
        'Once you bind, we issue certificates and handle additional insured requests for landlords and customers'
      ] },
      { h: 'Coverage local businesses ask about most', list: [
        'General liability and business owner’s policies (BOPs), including the limits a landlord requires',
        'Workers’ compensation: required for most Florida businesses with four or more employees, and for construction businesses with one',
        'Commercial auto, or hired and non-owned auto when employees drive their own cars for work',
        'Property, equipment and business income, with Florida wind and flood in mind',
        'Umbrella, professional liability and cyber where contracts call for them'
      ] }
    ],
    faqs: [
      ['Is there an independent business insurance agent in Ponte Vedra Beach?', 'Yes. Coast & Marsh Insurance Advisory is an independent agency in Ponte Vedra Beach, FL, run by licensed agent Marc Kaelin (Florida license G330108). It serves St. Johns County, Northeast Florida and clients statewide.'],
      ['Do you meet in person?', 'Most quotes are handled by phone and email, which is faster for most owners. For businesses in St. Johns County and the Jacksonville area, an in-person meeting can be arranged.'],
      ['What areas do you serve?', 'Ponte Vedra Beach, Nocatee, St. Johns, St. Augustine, the Jacksonville Beaches and the rest of St. Johns and Duval counties, plus businesses anywhere in Florida.'],
      ['What should I send to get a quote?', 'Your current declarations page if you have one, what your business does, your annual sales, number of employees, vehicles, and the insurance section of your lease or any contract that sets requirements.']
    ],
    related: ['newBusiness', 'contractorHub', 'autoRepair', 'pestControl', 'hempStore'],
    cta: LOCAL_CTA,
    note: LOCAL_NOTE
  },
  newBusiness: {
    kind: 'article',
    segment: 'newBusiness',
    group: 'local',
    date: '2026-11-03',
    parent: 'localBusiness',
    path: '/guides/what-insurance-does-a-new-business-need-florida',
    eyebrow: 'NEW BUSINESS INSURANCE',
    title: 'What Insurance Does a New Business Need in Florida?',
    description: 'A plain guide for new Florida and St. Johns County businesses: which insurance you need based on leased space, employees, vehicles, equipment and contracts, and what to have ready for a quote.',
    lead: 'There is no single starter package. What a new Florida business needs depends on five things: where you work, who works for you, what you drive, what you own, and what your lease and contracts require. Work through them in order.',
    sections: [
      { h: '1. Where you work', grid: [
        ['Leased space', 'Most commercial leases require general liability, often $1,000,000 per occurrence, with the landlord as additional insured. Many also require property coverage for your improvements. Read the insurance section before you sign.'],
        ['Home-based', 'A homeowners policy usually excludes business activity. Customers visiting, inventory at home or business equipment generally need their own coverage.'],
        ['Customers’ sites', 'If you work at customers’ homes or job sites, general liability is the core of your program. Contractors also need it for their license.']
      ] },
      { h: '2. Who works for you', p: ['In Florida, most businesses must carry workers’ compensation once they have four or more employees, full- or part-time. Construction businesses need it with just one employee. Corporate officers can usually elect an exemption for themselves; employees can’t be exempted. Independent contractors who are really employees are a common audit surprise.'] },
      { h: '3. What you drive', p: ['Vehicles titled to the business need commercial auto. If you or employees use personal cars for business errands, hired and non-owned auto coverage fills a gap a personal auto policy may not cover.'] },
      { h: '4. What you own', p: ['Equipment, tools, inventory and improvements to leased space need property or inland marine coverage. In Northeast Florida, check how wind and named storms are covered, and whether you need separate flood insurance.'] },
      { h: '5. What your contracts require', list: [
        'Specific liability limits and additional insured wording',
        'Waiver of subrogation or primary and non-contributory language',
        'Professional liability (errors and omissions) for advice or design work',
        'Cyber liability if you store customer payment or personal data'
      ] },
      { h: 'A common starting point', p: ['Many small new businesses start with a business owner’s policy (BOP), which combines general liability and property, then add workers’ comp, commercial auto or professional liability as they hire, buy vehicles or sign contracts. Higher-risk trades and specialty products often need a separate general liability policy from a specialty market instead.'] }
    ],
    faqs: [
      ['What insurance is legally required for a new business in Florida?', 'Workers’ compensation once you have four or more employees (one in construction), auto liability on business vehicles, and any insurance your professional or contractor license requires. Leases and contracts add requirements of their own.'],
      ['Can a brand-new business with no history get insurance?', 'Yes. Most small business policies don’t require a track record. Some higher-risk trades are harder, and specialty markets fill that gap.'],
      ['When should I buy insurance for a new business?', 'Before you sign a lease, start a job, hire or open to customers. Landlords and customers usually want a certificate of insurance before you start.'],
      ['Do you help new businesses in St. Johns County?', 'Yes. Coast & Marsh is based in Ponte Vedra Beach and works with new businesses in St. Johns County and across Florida.']
    ],
    related: ['localBusiness', 'newContractors', 'contractorHub'],
    cta: { ...LOCAL_CTA, title: 'Starting a business?', text: 'Call or text 904-988-5026 with what you do, your lease and your start date.' },
    note: LOCAL_NOTE
  },
  // ---------- Private client (coastal households) ----------
  privateNonRenewal: {
    kind: 'article',
    segment: 'personal',
    group: 'private',
    date: '2026-11-10',
    parent: 'privateClient',
    path: '/guides/florida-home-insurance-non-renewed',
    eyebrow: 'PRIVATE CLIENT',
    title: 'Florida Home Insurance Non-Renewed? What to Do Next',
    metaTitle: 'Florida Home Insurance Non-Renewed: What to Do Next',
    description: 'What to do when a Florida homeowners policy is non-renewed: the notice period, roof age and inspection rules, Citizens, high-value home carriers and surplus lines, and how to avoid a gap.',
    lead: 'A non-renewal letter is stressful, but it usually leaves time to act. Coast & Marsh, an independent agency in Ponte Vedra Beach, helps Florida homeowners replace non-renewed coverage, including oceanfront, older and higher-value homes that a standard carrier has stepped away from.',
    sections: [
      { h: 'First, check the dates', p: ['Florida generally requires an insurer to give written notice well before a homeowners policy ends; for most policies that is at least 120 days. Find the expiration date on the notice and work back from it. Starting early matters, because some inspections take a few weeks to schedule and flood coverage usually has a waiting period.'] },
      { h: 'Why Florida homes are non-renewed', list: [
        'The insurer is reducing how many homes it writes on the coast or in your county',
        'The age or condition of the roof',
        'Older plumbing, electrical or heating systems, often found on a 4-point inspection',
        'Prior claims, especially water or wind',
        'A home value above what the insurer wants to carry'
      ], p: ['A non-renewal for the insurer’s own business reasons says nothing bad about your home, and other markets may still want it.'] },
      { h: 'Roof age rules', p: ['Under Florida law, an insurer generally may not refuse to write or renew a home policy solely because the roof is less than 15 years old. For an older roof, the insurer must generally let you show its condition through an inspection before refusing on age alone. Keep any roof permit, inspection report or replacement invoice handy.'] },
      { h: 'Where the replacement coverage may come from', grid: [
        ['Standard carriers', 'Many Florida insurers still write homes in good condition, especially with a recent roof and a wind mitigation inspection.'],
        ['High-value home carriers', 'Some insurers specialize in higher-value homes and offer features like extended or guaranteed replacement cost and cash settlement options. Their appetite varies by county and by home.'],
        ['Surplus lines', 'Specialty insurers that can write homes standard carriers will not, often with different deductibles and terms. These policies are not covered by the Florida Insurance Guaranty Association.'],
        ['Citizens Property Insurance', 'Florida’s insurer of last resort. It has eligibility rules and coverage limits that many higher-value homes exceed, and it now requires flood coverage on many policies.']
      ] },
      { h: 'What helps an insurer say yes', list: [
        'A wind mitigation inspection, which can also earn premium credits for roof shape, roof-to-wall connections and opening protection',
        'A 4-point inspection for an older home',
        'Roof age and permit records',
        'Photos of the home, inside and out',
        'Your claims history for the last five years'
      ] },
      { h: 'How Coast & Marsh helps', p: ['We read the non-renewal notice with you, gather the inspections insurers will ask for, and approach the standard, high-value and surplus lines markets that fit the home. If you own more than one property, a boat or collections, we look at those at the same time so the umbrella and flood limits still line up.'], link: 'privateClient' }
    ],
    faqs: [
      ['My homeowners insurance was non-renewed. Can you help?', 'Often, yes. Send the non-renewal notice and your current declarations page if you have them, and we will look across the markets that may fit your home. There are no promises: availability depends on the home, its location and its history.'],
      ['How much notice does a Florida insurer have to give?', 'For most homeowners policies, Florida generally requires at least 120 days’ written notice of non-renewal. Check the date on your notice and start early.'],
      ['Can an insurer drop me for my roof’s age?', 'Florida law generally prevents an insurer from refusing to write or renew solely because a roof is less than 15 years old. For older roofs, the insurer generally must allow an inspection showing the roof’s condition.'],
      ['Should I just go to Citizens?', 'Citizens can be an option, but it has eligibility rules, coverage limits and flood requirements, and you may be required to take a private offer if one is available within a set range of the Citizens premium. A higher-value home often needs a different market.'],
      ['Is a surplus lines policy safe?', 'Surplus lines insurers are regulated differently and are not backed by the Florida Insurance Guaranty Association. They can be the right fit for homes the standard market will not write. We explain the differences before you decide.']
    ],
    related: ['privateFlood', 'privateValuables', 'privateClient'],
    cta: PRIVATE_CTA,
    emailItems: EMAIL_QUOTE_PRIVATE_CLIENT,
    emailSubject: 'Home insurance non-renewal',
    note: PRIVATE_NOTE
  },
  privateFlood: {
    kind: 'article',
    segment: 'personal',
    group: 'private',
    date: '2026-11-10',
    parent: 'privateClient',
    path: '/guides/private-flood-insurance-florida',
    eyebrow: 'PRIVATE CLIENT',
    title: 'Private and Excess Flood Insurance in Florida',
    metaTitle: 'Private Flood Insurance in Florida: Coverage Above $250,000',
    description: 'How Florida homeowners insure a home worth more than the $250,000 NFIP building limit: private flood, excess flood, waiting periods, flood zones and Citizens flood requirements.',
    lead: 'A government flood policy covers a home’s structure up to $250,000 and its contents up to $100,000. On a coastal Florida home worth several times that, the rest is often uninsured. Coast & Marsh, an independent agency in Ponte Vedra Beach, places private and excess flood for homeowners across Florida.',
    sections: [
      { h: 'The gap on higher-value homes', p: ['Homeowners policies exclude flood, so storm surge and rising water fall on a flood policy. The National Flood Insurance Program (NFIP) caps building coverage at $250,000 and contents at $100,000, and it generally does not cover living expenses while you are out of the home. For an oceanfront or Intracoastal home, that can leave most of the rebuild cost exposed.'] },
      { h: 'Private flood and excess flood', grid: [
        ['Private flood', 'Replaces the NFIP policy. It can offer higher limits, replacement cost on contents, and sometimes additional living expenses or pool and landscaping coverage. Terms differ by insurer.'],
        ['Excess flood', 'Sits above an NFIP policy and picks up where its $250,000 building and $100,000 contents limits stop. Useful when you want to keep the NFIP policy, for example for its rating history.']
      ] },
      { h: 'Waiting periods', p: ['Most new NFIP policies take effect 30 days after purchase, with some exceptions, such as when a lender requires coverage at closing. Private flood waiting periods vary by insurer, and many insurers stop binding new flood coverage when a named storm is approaching. The time to buy is before hurricane season.'] },
      { h: 'Flood zone is not the whole story', p: ['A home outside a high-risk flood zone can still flood, and lenders may not require coverage there. Many Florida flood claims come from homes outside the high-risk zones. If you are a Citizens policyholder, Citizens now requires flood coverage on many policies.'] },
      { h: 'What insurers ask for', list: [
        'An elevation certificate, if you have one',
        'The home’s replacement cost and year built',
        'Foundation type and the number of floors',
        'Prior flood claims',
        'Your current flood declarations page'
      ] },
      { h: 'How Coast & Marsh helps', p: ['We review flood alongside the home, wind deductible, boats and umbrella, so a storm does not expose a gap between policies. If you have a second or seasonal home, we review its flood coverage too.'], link: 'privateClient' }
    ],
    faqs: [
      ['How do I insure a home worth more than $250,000 for flood?', 'Either replace the NFIP policy with a private flood policy that has higher limits, or keep the NFIP policy and add excess flood above it. Which fits depends on the home and the markets available.'],
      ['Do I need flood insurance if I am not in a flood zone?', 'Lenders may not require it, but flooding happens outside high-risk zones too. It is worth pricing, and Citizens requires flood on many of its policies.'],
      ['Is there a waiting period on flood insurance?', 'Most new NFIP policies have a 30-day waiting period, with some exceptions. Private flood waiting periods vary, and insurers usually stop binding new coverage when a storm is approaching.'],
      ['Does flood insurance cover my pool, seawall or dock?', 'NFIP policies generally exclude them. Some private flood policies include limited coverage. Check the policy wording, and ask us to compare.']
    ],
    related: ['privateNonRenewal', 'privateValuables', 'privateClient'],
    cta: PRIVATE_CTA,
    emailItems: EMAIL_QUOTE_PRIVATE_CLIENT,
    emailSubject: 'Flood insurance review',
    note: PRIVATE_NOTE
  },
  privateValuables: {
    kind: 'article',
    segment: 'personal',
    group: 'private',
    date: '2026-11-10',
    parent: 'privateClient',
    path: '/guides/insure-jewelry-watches-art-florida',
    eyebrow: 'PRIVATE CLIENT',
    title: 'How to Insure Jewelry, Watches and Art in Florida',
    metaTitle: 'How to Insure Jewelry, Watches and Fine Art in Florida',
    description: 'Why homeowners policies cap theft of jewelry and watches, how scheduling and agreed value work, when to update appraisals, and what to know about insuring art and collections in Florida.',
    lead: 'A homeowners policy covers jewelry and watches, but usually only up to a small theft limit, often a few thousand dollars in total. Coast & Marsh, an independent agency in Ponte Vedra Beach, helps Florida households insure jewelry, watches, art, wine and collections for what they are actually worth.',
    sections: [
      { h: 'The limit most people miss', p: ['Standard home policies set a special limit for theft of jewelry, watches and similar items, often far less than one engagement ring or watch is worth. Loss, such as a stone falling out or a ring left in a hotel, is often not covered at all.'] },
      { h: 'Scheduling: how it works', list: [
        'Each piece is listed on the policy with its appraised value',
        'Coverage is often broader, frequently including loss and mysterious disappearance',
        'Many insurers apply little or no deductible to scheduled items',
        'You may be able to choose a jeweler or receive cash settlement, depending on the insurer'
      ] },
      { h: 'Keep appraisals current', p: ['Values for gold, diamonds and collectible watches move. Many owners update appraisals every three to five years, or after a big change in the market, so the scheduled value still matches the replacement cost. Keep receipts, appraisals, serial numbers and photos stored somewhere other than the home.'] },
      { h: 'Fine art, wine and collections', grid: [
        ['Agreed value', 'Art is usually insured for an agreed value set by appraisal, so a total loss pays that amount without an argument about value.'],
        ['Breakage', 'Breakage of fragile pieces may need to be added. Ask about it for sculpture, glass and ceramics.'],
        ['Transit and loans', 'Moving a piece, lending it to a museum or consigning it can fall outside coverage unless the policy includes it.'],
        ['Climate and storms', 'Florida humidity, power loss and evacuations matter. Some insurers ask about climate control and storm plans for valuable collections.']
      ] },
      { h: 'How Coast & Marsh helps', p: ['We review what is scheduled against what you own, help arrange updated appraisals, and keep the schedule current as you buy, sell or inherit pieces. Valuables are reviewed alongside the home, flood and umbrella in a Coastal Coverage Review.'], link: 'privateClient' }
    ],
    faqs: [
      ['Is my engagement ring covered by homeowners insurance?', 'Usually only up to the policy’s special theft limit for jewelry, which is often far below the ring’s value, and loss may not be covered. Scheduling the ring covers it for its appraised value.'],
      ['How often should I get jewelry appraised for insurance?', 'Many owners update every three to five years, or sooner after a big move in gold, diamond or watch prices, so the scheduled value matches what it would cost to replace.'],
      ['Are luxury watches covered when I travel?', 'Scheduled items are often covered worldwide, but terms vary by insurer. Check the policy before a trip, and ask about limits for items in a hotel safe.'],
      ['How is fine art insured?', 'Usually on an agreed value basis set by appraisal, with options for breakage, transit and pieces on loan. Larger collections may need a separate fine art policy.']
    ],
    related: ['privateNonRenewal', 'privateFlood', 'privateClient'],
    cta: PRIVATE_CTA,
    emailItems: EMAIL_QUOTE_PRIVATE_CLIENT,
    emailSubject: 'Jewelry, watch and art coverage',
    note: PRIVATE_NOTE
  },
  // ---------- Contractors ----------
  contractorExemptWc: {
    kind: 'article',
    segment: 'contractors',
    group: 'contractor',
    date: '2026-11-27',
    parent: 'contractorHub',
    path: '/guides/florida-workers-comp-exemption-gc-requires-policy',
    eyebrow: 'CONTRACTOR INSURANCE',
    title: 'Exempt From Workers’ Comp, but the GC Wants a Policy: What Florida Contractors Can Do',
    metaTitle: 'Florida Workers’ Comp Exemption but GC Requires a Policy: Options',
    description: 'Why Florida general contractors and cities often refuse a construction officer exemption and ask for a workers’ compensation policy, how the exemption works under section 440.05, and the realistic options for an owner-only or small contractor.',
    lead: 'You filed your construction exemption, paid the $50 and got your certificate. Then the general contractor, property manager or city says an exemption isn’t enough and they need a workers’ comp policy before you start. It happens every week in Florida. Here is why, and what you can do about it without overbuying.',
    sections: [
      { h: 'How the construction exemption works', list: [
        'Officers of a Florida corporation and members of a Florida LLC who own at least 10% can elect to be exempt, filed online with the Division of Workers’ Compensation.',
        'No more than three exemptions are allowed per company or group of affiliated companies.',
        'The fee is $50, and a construction exemption is valid for 2 years. The Division sends a notice about 60 days before it expires.',
        'The certificate covers only the person named on it and lists the company it applies to. It is not a contractor license.',
        'An exempt officer gives up workers’ comp benefits for their own injuries (section 440.05(13)).',
        'Employees can’t be exempted. In construction, one employee generally means you need a policy.'
      ] },
      { h: 'Why a GC or city still asks for a policy', p: [
        'Under section 440.10, a contractor that hires a subcontractor is responsible for workers’ comp for the sub’s workers if the sub doesn’t carry it. That is why the general contractor’s own insurer looks at every subcontractor at audit.',
        'At the GC’s year-end audit, an uninsured sub’s payroll or contract price is often added to the GC’s premium. An exemption certificate covers the owner, but the GC’s auditor can’t see whether you had a helper on the job, so many GCs ask every sub for a policy, even a minimal one. Some contracts, property managers and permit offices set the same rule.'
      ] },
      { h: 'Your options', grid: [
        ['Minimum-premium policy with no employees', 'A real workers’ comp policy written for an owner-only business, sometimes called an “if any” or ghost policy. Exempt officers stay excluded, so the price is usually close to the insurer’s minimum premium. It gives the GC a certificate showing coverage is in force.'],
        ['Include yourself on the policy', 'Revoke the exemption and cover the owner. It costs more, but your own injuries are covered, which many owners who work on roofs or ladders want anyway.'],
        ['Employee leasing (PEO)', 'If you have or will soon have employees, a professional employer organization can carry the workers’ comp and handle payroll. Useful when the standard market declines a new contractor with no prior coverage.'],
        ['Ask the GC what they accept', 'Some GCs accept an exemption plus a signed statement that you have no employees on site. Ask before you buy anything, and get the answer in writing.']
      ] },
      { h: 'Why some contractors get declined at first', p: [
        'Many online workers’ comp markets decline construction businesses that have never carried a policy, and some exclude roofing, general contractors or work above a certain height. That doesn’t mean you can’t get coverage. It means the submission has to go to markets that write new construction accounts, and sometimes to a PEO.',
        'An independent agent can put your coverage in front of several carriers at once, so a decline from one market doesn’t cost you the job.'
      ] },
      { h: 'Before you buy, have this ready', list: [
        'Your exemption certificate and the names of every owner and officer',
        'Your trade and the job descriptions you actually do (the class code drives the price)',
        'Estimated payroll for the next 12 months, including any helpers, and what you pay subcontractors',
        'Certificates of insurance or exemptions from your own subs',
        'The GC’s or city’s exact insurance requirement, ideally the contract page',
        'When the job starts'
      ] },
      { h: 'Keep the audit from surprising you', p: [
        'Workers’ comp is priced on an estimate and trued up at audit. If you hire help or pay uninsured subs during the year, the auditor adds that payroll and bills the difference. Keep copies of every sub’s certificate or exemption, and tell your agent when you hire someone so the estimate stays close.'
      ], link: 'newContractors' }
    ],
    faqs: [
      ['Can a general contractor require workers’ comp if I have an exemption?', 'Yes. The exemption is valid under Florida law, but a general contractor can set its own requirements in the subcontract. Many require a policy because, under section 440.10, the GC can be responsible for the comp of a sub’s uninsured workers.'],
      ['How much does a workers’ comp policy with no employees cost in Florida?', 'It is usually close to the insurer’s minimum premium, because exempt officers are excluded and payroll is low. The exact price depends on your trade’s class code and the insurer.'],
      ['How long is a Florida construction exemption good for?', 'Two years from its effective date. The fee is $50, and the Division of Workers’ Compensation sends an expiration notice at least 60 days before it expires.'],
      ['How many owners can be exempt?', 'Up to three officers or LLC members per company or group of affiliated companies, and each must own at least 10%.'],
      ['Can I exempt my employees or helpers?', 'No. Only qualifying officers and LLC members can be exempt. A construction business with one or more employees generally must carry workers’ compensation.'],
      ['What if I get declined for workers’ comp?', 'Declines are common for contractors with no prior coverage. Coast & Marsh works with markets that write new construction accounts and with employee leasing companies, and can put your coverage in front of several of them at once.']
    ],
    related: ['contractorHub', 'newContractors'],
    cta: { short: 'Request a quote', label: 'Start a contractor quote', href: '/contractor-insurance#review', title: 'Need a certificate before the job starts?', text: 'Send your trade, exemption certificate and the GC’s requirement, or call or text 904-988-5026.' },
    emailSubject: 'Contractor workers’ comp quote (exempt owner)',
    note: 'General information only, not legal advice, a quote or a coverage determination. Workers’ compensation rules reflect sections 440.02, 440.05 and 440.10, Florida Statutes, and Division of Workers’ Compensation guidance as of November 2026; confirm current rules with the Division. Eligibility, pricing and terms are set by the insurer.'
  },
  privateClient: { path: '/private-client', title: 'Private client insurance for coastal Florida homes' },
  contractorHub: { path: '/contractor-insurance', title: 'Florida contractor insurance' },
  newContractors: { path: '/contractor-insurance/new-contractors', title: 'Insurance for new Florida contractors and startups' },
};

export const GUIDE_PAGES = Object.values(GUIDES).filter((g) => g.kind);
