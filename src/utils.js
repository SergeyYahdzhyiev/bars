export function css(styles = {}) {
  if (typeof styles === 'string') return styles;
  const toString = (key) => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(toString).join(';');
}

export function property(action = 'remove', object = {}, e) {
  if (action === 'remove') {
    Object.keys(object).forEach((key) => {
      e.target.style.removeProperty(key);
    });
  } else {
    Object.keys(object).forEach((key) => {
      e.target.style.setProperty(key, object[key]);
    });
  }
}
