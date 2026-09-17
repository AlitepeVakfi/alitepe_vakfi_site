// Logodan türetilen dekoratif çizimler: dünya küresi ağı ve kalp atışı çizgisi.

export const GlobeMark = ({ className }) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    aria-hidden="true"
    className={className}
  >
    <circle cx="200" cy="200" r="190" vectorEffect="non-scaling-stroke" />
    <circle cx="200" cy="200" r="199" strokeDasharray="1 7" vectorEffect="non-scaling-stroke" />
    <ellipse cx="200" cy="200" rx="64" ry="190" vectorEffect="non-scaling-stroke" />
    <ellipse cx="200" cy="200" rx="130" ry="190" vectorEffect="non-scaling-stroke" />
    <path
      d="M200 10v380M10 200h380M23.4 130h353.2M23.4 270h353.2M66.3 65h267.4M66.3 335h267.4"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);

export const PulseLine = ({ className, animated = false }) => (
  <svg
    viewBox="0 0 160 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path
      pathLength="1"
      className={animated ? "pulse-path" : undefined}
      d="M0 16H50Q54 10 58 16H66L70 20L76 3L82 28L86 16H94Q99 9 104 16H160"
    />
  </svg>
);
