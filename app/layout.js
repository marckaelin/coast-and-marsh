import './globals.css';

export const metadata = {
  title: 'Coast & Marsh Insurance Advisory',
  description: 'Personal and commercial insurance advisory for coastal households and regulated businesses.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
