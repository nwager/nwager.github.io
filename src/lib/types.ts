// https://stackoverflow.com/a/59980296
export type NonemptyArray<T> = [T, ...T[]];

export interface Link {
  text: string;
  url: string;
}

export default {};
