import { ImageResponse } from 'next/og';

export const alt = 'Coast & Marsh Insurance Advisory';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px', background: '#0b4652', color: '#f7f4ed' }}>
        <div style={{ fontSize: 28, letterSpacing: 6, color: '#b9c79f' }}>INSURANCE ADVISORY</div>
        <div style={{ fontSize: 96, marginTop: 18, fontFamily: 'Georgia, serif' }}>Coast &amp; Marsh</div>
        <div style={{ fontSize: 36, marginTop: 28, color: '#c9dad8' }}>Boat, contractor and specialty insurance for Florida</div>
      </div>
    ),
    size
  );
}
