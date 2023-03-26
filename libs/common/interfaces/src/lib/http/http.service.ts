import { Service } from './ports/service';
import { from } from 'rxjs';

export abstract class HttpService<T> implements Service<T> {
  constructor(private url: string) {}

  findAll() {
    const prepare = fetch(`${this.url}`);
    const request = prepare.then((res) => res.json());
    return from<Promise<T[]>>(request);
  }

  findOne(id: number) {
    const prepare = fetch(`${this.url}/${id}`);
    const request = prepare.then((res) => res.json());
    return from<Promise<T>>(request);
  }
}
