export const SITE = {
  url: 'https://www.coastandmarsh.com',
  name: 'Coast & Marsh Insurance Advisory',
  phone: '+1-904-988-5026',
  phoneDisplay: '904-988-5026',
  email: 'marc.kaelin@coastandmarsh.com'
};

export const PAGES = [
  { path: '/', priority: 1 },
  { path: '/boat-insurance', priority: 0.9 },
  { path: '/tools/yacht-insurance-cost-calculator', priority: 0.9 },
  { path: '/contractor-insurance', priority: 0.8 },
  { path: '/smoke-shop-insurance', priority: 0.7 },
  { path: '/guides/how-much-does-boat-insurance-cost-in-florida', priority: 0.7 },
  { path: '/guides/florida-contractor-insurance-cost', priority: 0.7 },
  { path: '/guides/florida-contractor-license-insurance-requirements', priority: 0.7 },
  ...['electrical', 'roofing', 'hvac', 'plumbing', 'general-contractors', 'new-contractors'].map((t) => ({ path: `/contractor-insurance/${t}`, priority: 0.8 })),
  { path: '/privacy', priority: 0.2 },
  { path: '/terms', priority: 0.2 }
];
