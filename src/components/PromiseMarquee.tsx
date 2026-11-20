'use client';

const PROMISES = [
  'Quality Work',
  'Delivered On Time',
  'More Customers',
  'Websites',
  'Apps',
  'Automation',
  'Built Around Your Business',
  'Talk Directly To The Founders',
];

export default function PromiseMarquee() {
  const list = (hidden: boolean) => (
    <ul className="marquee__content" aria-hidden={hidden} style={{ animationDuration: '40s' }}>
      {PROMISES.map((text) => (
        <li key={text} className="flex items-center gap-6 sm:gap-10 whitespace-nowrap">
          <span
            className="text-xs sm:text-sm md:text-base font-light tracking-[0.25em] uppercase"
            style={{ color: 'var(--text-muted)' }}
          >
            {text}
          </span>
          <span style={{ color: 'var(--text-subtle)' }}>✦</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className="w-full overflow-hidden py-4 border-y"
      style={{ borderColor: 'var(--border-medium)' }}
      aria-label="What you can expect from us"
    >
      <div className="marquee">
        {list(false)}
        {list(true)}
      </div>
    </div>
  );
}
