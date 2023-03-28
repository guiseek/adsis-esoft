import { HttpAjaxService } from './http-ajax.service';
import { Observable } from 'rxjs';

describe('HttpService', () => {
  let service: HttpAjaxService<any>;

  beforeEach(() => {
    service = new HttpAjaxService('/api');
  });

  it('deve instanciar', () => {
    expect(service).toBeInstanceOf(HttpAjaxService);
  });

  it('deve retornar um observable', () => {
    const findAll$ = service.findAll('test');
    expect(findAll$).toBeInstanceOf(Observable);
  });

  it('deve retornar um objeto', () => {
    const findOne$ = service.findOne('test', 0);
    jest.spyOn(findOne$, 'subscribe');

    findOne$.subscribe((value) => {
      expect(value).toStrictEqual({});
    });
  });
});
