import { Token, provider } from './provider';

class Provider {}
class ProviderImpl {}

const TOKEN = new Token('token.id');
const tokenValue = 'token value';

describe('HttpService', () => {
  provider.add(TOKEN, tokenValue);
  provider.add(Provider, ProviderImpl);

  it('quando usamos provider, deve ser impl', () => {
    const instance = provider.use(Provider);
    expect(instance).toBeInstanceOf(ProviderImpl);
  });

  it('quando usamos token, deve ser token value', () => {
    const value = provider.use(TOKEN);
    expect(value).toBe(tokenValue);
  });
});
