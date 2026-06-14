export function BrandLogo() {
  return (
    <svg viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={28} height={24}>
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="32" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3CAC" />
          <stop offset=".5" stopColor="#A855F7" />
          <stop offset="1" stopColor="#F97316" />
        </linearGradient>
      </defs>
      <path d="M11 4 L3 12 L11 20" stroke="url(#lg)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 4 L29 12 L21 20" stroke="url(#lg)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
