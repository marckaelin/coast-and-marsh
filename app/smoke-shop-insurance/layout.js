import JsonLd from '../components/JsonLd';
import { SITE } from '../lib/site';
import { SMOKE_FAQS } from '../lib/smoke-shop-content';

export const metadata = {
  title: 'Smoke Shop, Vape, Kratom & Hemp Store Insurance in Florida',
  description: 'Insurance for Florida smoke shops, vape stores, kratom and hemp retailers, including stores other insurers declined. Specialty markets, December 11 hemp change, and a quick online review.',
  alternates: { canonical: '/smoke-shop-insurance' }
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Smoke shop, vape and hemp store insurance', serviceType: 'Smoke shop insurance', provider: { '@id': `${SITE.url}/#agency` }, areaServed: { '@type': 'State', name: 'Florida' }, url: `${SITE.url}/smoke-shop-insurance` },
    { '@type': 'FAQPage', mainEntity: SMOKE_FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  ]
};

export default function Layout({ children }) {
  return <><JsonLd data={schema} />{children}</>;
}
