export {};

declare global {
  /**
   * Require only one of the specified properties. If all properties are present, it will raise an error.
   * @example
   * type Foo = {name: string, lastName: string, age: number}
   * const foo: OneOf<Foo, 'name' | 'lastName'> = {name: 'John', age: 30}
   * const bar: OneOf<Foo, 'name' | 'lastName'> = {lastName: 'Doe', age: 30}
   *
   * // will raise an error
   * const baz: OneOf<Foo, 'name' | 'lastName'> = {name: 'John', lastName: 'Doe', age: 30}
   */
  export type OneOf<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
    {
      [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
    }[Keys];

  /**
   * Get the string literal of a type, if it's not a string then the type is invalid.
   */
  export type StringLiteral<T> = T extends string ? (string extends T ? never : T) : never;
}
