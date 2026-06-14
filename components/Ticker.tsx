"use client";

const ITEMS = [
  "CAR RENTAL", "CONSTRUCTION", "WELLNESS & SPA",
  "BOOKSTORE", "INTERIOR DECOR", "WEB APPS",
  "MOBILE APPS", "BUSINESS SITES", "E-COMMERCE",
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            {item}
            <span className="ticker-dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
