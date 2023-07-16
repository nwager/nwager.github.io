/**
 * Returns `n mod m` (always positive). https://stackoverflow.com/a/17323608
 * @param n The number to mod
 * @param m Modulo base
 */
export function mod(n, m) {
  return ((n % m) + m) % m;
}

/**
 * Get slug from file path.
 * https://github.com/mvasigh/sveltekit-mdsvex-blog/blob/main/src/lib/util.js
 */
export const slugFromPath = (path) => {
  return path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;
}

/**
 * Encode text to a safe format for text link hashes.
 */
export const encodeText = (text: string) => {
  return encodeURIComponent(text)
    .replace('-', '%2D') // url-encode hyphens
}

/**
 * Returns hash-link version of text.
 */
export const textToHashLink = (text: string) => {
  return text.replace(/\s/g, '-').replace(/[^a-z0-9\-]/gi, '').toLowerCase();
}

export default {};
