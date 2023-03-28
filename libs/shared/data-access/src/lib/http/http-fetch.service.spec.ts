import { HttpFetchService } from './http-fetch.service';
import { Observable } from 'rxjs';

Object.defineProperty(window, 'fetch', {
  value: async (input: string, config = {}) => ({
    async json() {
      return {};
    },
    async text() {
      return {};
    },
  }),
});

describe('HttpService', () => {
  let service: HttpFetchService<any>;

  beforeEach(() => {
    service = new HttpFetchService('/api');
  });

  it('deve instanciar', () => {
    expect(service).toBeInstanceOf(HttpFetchService);
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
