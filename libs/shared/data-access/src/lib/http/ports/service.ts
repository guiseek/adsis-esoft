import { Observable } from 'rxjs';

export abstract class Service<T> {
  abstract findAll(endpoint: string): Observable<T[]>;
  abstract findOne(endpoint: string, id: number): Observable<T>;
}
