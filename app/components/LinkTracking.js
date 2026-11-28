'use client';
import { useEffect } from 'react';
import { track } from '../lib/analytics';

// One listener for the whole site: every tel:, sms: and mailto: link sends a GA4 event
// (phone_click, text_click, email_click),
// tagged with the page and the link text, so calls and emails can be traced to their page.
export default function LinkTracking() {
  useEffect(() => {
    function onClick(e) {
      const a = e.target instanceof Element ? e.target.closest('a[href^="tel:"], a[href^="sms:"], a[href^="mailto:"]') : null;
      if (!a) return;
      const href = a.getAttribute('href');
      const name = href.startsWith('tel:') ? 'phone_click' : href.startsWith('sms:') ? 'text_click' : 'email_click';
      track(name, {
        link_url: href,
        link_text: (a.textContent || '').trim().slice(0, 100),
        page_path: window.location.pathname
      });
    }
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);
  return null;
}
