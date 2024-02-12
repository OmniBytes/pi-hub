export type OptionKeys<T> = keyof T;
export type OptionValues<T> = T[OptionKeys<T>];
