// Minimal `cn` utility (tiny clsx-like) used across UI components.
// Accepts strings, arrays, and objects: cn('a','b', ['c','d'], { e: true, f: false }) -> 'a b c d e'
export function cn(...inputs) {
  const classes = [];
  for (const input of inputs) {
    if (!input) continue;
    const type = typeof input;
    if (type === 'string') {
      classes.push(...input.split(/\s+/).filter(Boolean));
      continue;
    }
    if (Array.isArray(input)) {
      classes.push(...input.map(String).filter(Boolean));
      continue;
    }
    if (type === 'object') {
      for (const key of Object.keys(input)) {
        if (input[key]) classes.push(key);
      }
      continue;
    }
    // fallback
    classes.push(String(input));
  }
  return classes.join(' ');
}

// Small helper to merge style objects (optional)
export function mergeStyles(...objs) {
  return Object.assign({}, ...objs.filter(Boolean));
}

// Helper to convert page names to URL paths
export function createPageUrl(pageName) {
  if (!pageName) return '/';
  return `/${pageName.toLowerCase().replace(/\s+/g, '-')}`;
}

export default cn;
