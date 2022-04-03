// handles negatives correctly (never returns negative)
// https://stackoverflow.com/a/17323608
export function mod(n, m) {
  return ((n % m) + m) % m;
}

export default {};
