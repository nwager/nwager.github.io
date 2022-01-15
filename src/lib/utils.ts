// https://stackoverflow.com/a/59980296
export type NonemptyArray<T> = [T, ...T[]];

// handles negatives correctly (never returns negative)
// https://stackoverflow.com/a/17323608
export function mod(n, m) {
  return ((n % m) + m) % m;
}

export const NARROW_WIDTH = 640; // $lib/style/variables.scss $narrow-width

export default {};