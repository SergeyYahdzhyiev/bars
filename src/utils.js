export function parseStyles(object) {
  return Object.keys(object)
    .map((key) => `${key}: ${object[key]};`)
    .join('\n\t');
}
