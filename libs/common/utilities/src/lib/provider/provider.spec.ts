import { setProvider, useProvider } from './provider';

abstract class Http {
  abstract get<R>(url: string): R;
  abstract post<R, D>(url: string, data: D): R;
  abstract put<R, D>(url: string, data: D): R;
  abstract delete<R, D>(url: string, data?: D): R;
  abstract patch<R, D>(url: string, data?: D): R;
}

class HttpClient implements Http {
  get<R>(url: string): R {
    throw 'Method GET not implemented.';
  }
  post<R, D>(url: string, data: D): R {
    throw 'Method POST not implemented.';
  }
  put<R, D>(url: string, data: D): R {
    throw 'Method PUT not implemented.';
  }
  delete<R, D>(url: string, data: D): R {
    throw 'Method DELETE not implemented.';
  }
  patch<R, D>(url: string, data: D): R {
    throw 'Method PATCH not implemented.';
  }
}

describe('commonUtilities', () => {
  let http: Http;

  beforeEach(() => {
    setProvider(Http, HttpClient);
  });

  it('should work', () => {
    http = useProvider(Http);
    expect(http).toBeInstanceOf(HttpClient);
  });

  it('should GET', () => {
    http = useProvider(Http);
    expect(() => {
      http.get('');
    }).toThrow('Method GET not implemented.');
  });

  it('should POST', () => {
    http = useProvider(Http);
    expect(() => {
      http.post('', {});
    }).toThrow('Method POST not implemented.');
  });

  it('should PUT', () => {
    http = useProvider(Http);
    expect(() => {
      http.put('', {});
    }).toThrow('Method PUT not implemented.');
  });

  it('should DELETE', () => {
    http = useProvider(Http);
    expect(() => {
      http.delete('');
    }).toThrow('Method DELETE not implemented.');
  });

  it('should PATCH', () => {
    http = useProvider(Http);
    expect(() => {
      http.patch('');
    }).toThrow('Method PATCH not implemented.');
  });
});
