export function parseStyles(
  object: Record<string, string | number> | undefined
): string {
  if (!object) return '';
  return Object.keys(object)
    .map((key) => `${key}: ${object[key]};`)
    .join('\n\t');
}
