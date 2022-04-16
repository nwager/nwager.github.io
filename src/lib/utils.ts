// handles negatives correctly (never returns negative)
// 
/**
 * Returns `n mod m` (always positive). https://stackoverflow.com/a/17323608
 * @param n The number to mod
 * @param m Modulo base
 */
export function mod(n, m) {
  return ((n % m) + m) % m;
}

export default {};
