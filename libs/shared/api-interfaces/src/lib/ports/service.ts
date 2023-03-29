import { Observable } from 'rxjs';

export abstract class Service<T> {
  abstract findAll(...params: unknown[]): Observable<T[]>;
  abstract findOne(...params: unknown[]): Observable<T>;
}
