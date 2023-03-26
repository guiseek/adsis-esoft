import { Observable } from 'rxjs';

export abstract class Service<T> {
  abstract findAll(): Observable<T[]>;
  abstract findOne(id: number): Observable<T>;
}
