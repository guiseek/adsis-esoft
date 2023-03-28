import { HttpFetchService } from './http-fetch.service';

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

  it('should work', () => {
    expect(service).toBeInstanceOf(HttpFetchService);
  });

  it('should work', () => {
    const findAll$ = service.findAll('');
    jest.spyOn(findAll$, 'subscribe');

    findAll$.subscribe((value) => {
      console.log(value);
    });
  });
});
