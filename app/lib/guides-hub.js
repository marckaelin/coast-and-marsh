import { GUIDE_PAGES } from './industry-guides';

// Segments in the order the /guides hub shows them. Each has its main page plus
// guides. Guides in app/lib/industry-guides.js join a segment through their
// `segment` field; older hand-built guide pages are listed in `extra`.
export const SEGMENTS = [
  { id: 'contractors', label: 'Contractors', page: ['Florida contractor insurance', '/contractor-insurance'],
    extra: [
      ['Florida contractor license insurance requirements', '/guides/florida-contractor-license-insurance-requirements'],
      ['What affects contractor insurance cost in Florida', '/guides/florida-contractor-insurance-cost'],
      ['Insurance for new contractors', '/contractor-insurance/new-contractors']
    ] },
  { id: 'autoRepair', label: 'Auto repair', page: ['Auto repair shop insurance', '/auto-repair-shop-insurance'] },
  { id: 'homeCare', label: 'Home care and home health', page: ['Home care agency insurance', '/home-care-agency-insurance'] },
  { id: 'hemp', label: 'Hemp, CBD and smoke shops', page: ['Hemp and CBD store insurance', '/hemp-cbd-store-insurance'],
    extra: [['Smoke shop insurance', '/smoke-shop-insurance']] },
  { id: 'pest', label: 'Pest control and termite', page: ['Pest control insurance', '/pest-control-insurance'] },
  { id: 'newBusiness', label: 'New and local businesses', page: ['Business insurance in Ponte Vedra Beach and St. Johns County', '/business-insurance-ponte-vedra-beach-st-johns-county'] },
  { id: 'personal', label: 'Homes, boats and families', page: ['Private Client', '/private-client'],
    extra: [
      ['Boat and yacht insurance', '/boat-insurance'],
      ['How much does boat insurance cost in Florida?', '/guides/how-much-does-boat-insurance-cost-in-florida'],
      ['Yacht insurance cost estimator', '/tools/yacht-insurance-cost-calculator']
    ] }
];

export function hubSegments() {
  return SEGMENTS.map((s) => {
    const guides = GUIDE_PAGES
      .filter((g) => g.segment === s.id && g.path.startsWith('/guides/'))
      .map((g) => [g.title, g.path, g.description]);
    return { ...s, links: [...guides, ...(s.extra || [])] };
  });
}
