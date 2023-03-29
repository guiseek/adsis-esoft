import { Service } from '@adsis-esoft/shared/api-interfaces';
import { AjaxResponse, ajax } from 'rxjs/ajax';
import { map } from 'rxjs';

const pickResponse = <T>({ response }: AjaxResponse<T>) => response;

export class HttpAjaxService<T> implements Service<T> {
  constructor(private api: string) {}

  findAll(endpoint: string) {
    const url = `${this.api}/${endpoint}`;
    return ajax<T[]>({ url }).pipe(map(pickResponse));
  }

  findOne(endpoint: string, id: number) {
    const url = `${this.api}/${endpoint}/${id}`;
    return ajax<T>({ url }).pipe(map(pickResponse));
  }
}
