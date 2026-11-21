'use client';
import { useEffect } from 'react';
import { track } from '../lib/analytics';

// Tags 404 views in GA4 with the broken path and where the visitor came from,
// so real broken links can be told apart from bot probes in Reports > Events.
export default function NotFoundTracker() {
  useEffect(() => {
    track('page_not_found', {
      missing_path: window.location.pathname.slice(0, 100),
      referrer_host: document.referrer ? new URL(document.referrer).hostname : '(direct)'
    });
  }, []);
  return null;
}
