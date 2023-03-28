import { Service } from './ports/service';
import { from } from 'rxjs';

export class HttpFetchService<T> implements Service<T> {
  constructor(private api: string) {}

  findAll(endpoint: string) {
    const prepare = fetch(`${this.api}/${endpoint}`);
    const request = prepare.then((res) => res.json());
    return from<Promise<T[]>>(request);
  }

  findOne(endpoint: string, id: number) {
    const prepare = fetch(`${this.api}/${endpoint}/${id}`);
    const request = prepare.then((res) => res.json());
    return from<Promise<T>>(request);
  }
}
