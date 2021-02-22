export function css(styles = {}) {
  if (typeof styles === 'string') return styles;
  const toString = (key) => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(toString).join(';');
}
