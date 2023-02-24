export interface TypeOf<T> extends Function {
  new (...params: unknown[]): T;
}
