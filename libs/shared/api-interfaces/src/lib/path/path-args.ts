import { PathParams } from './path-params';

export type PathArgs<Path extends string> = {
  [K in PathParams<Path>]: string;
};
