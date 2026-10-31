// Google tag IDs. Both are configured on the same gtag.js instance in app/layout.js.
export const GA4_ID = 'G-2RZZ9CHNLS';
export const ADS_ID = 'AW-18468447688';

// Send a GA4 event if the Google tag has loaded. Safe to call during SSR or with an ad blocker.
export function track(name, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', name, params);
}

// Mark a completed lead form. "generate_lead" is GA4's recommended lead event,
// so it can be flagged as a key event in GA4 and imported into Google Ads.
export function trackLead(form, params = {}) {
  track('generate_lead', { form_name: form, ...params });
}
