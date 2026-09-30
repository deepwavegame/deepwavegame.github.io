/** Right-pointing arrow, drawn in SVG so it matches the type colour and weight. */
export default function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3 12h16m-7-7 7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}
