import { NextResponse } from 'next/server';

// Plain-text emails and chat apps often glue the punctuation after a link onto the URL,
// so "coastandmarsh.com/contractor-insurance," arrives as a request for
// "/contractor-insurance," and lands on the 404 page. Strip trailing punctuation and
// redirect to the real page. The matcher keeps this off every normal request.
const TRAILING = /(?:[,.;:!?)\]}'"*>]|%2C|%22|%27|%29|%3E|%5D)+$/i;

export function middleware(request) {
  const url = request.nextUrl.clone();
  const cleaned = url.pathname.replace(TRAILING, '');
  if (cleaned === url.pathname) return NextResponse.next();
  url.pathname = cleaned || '/';
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Only paths whose last character is punctuation (raw or percent-encoded).
  matcher: [
    '/((?!_next/|api/).*[,.;:!?\'"*>])',
    '/((?!_next/|api/).*%(?:2[cC]|22|27|29|3[eE]|5[dD]))'
  ]
};
