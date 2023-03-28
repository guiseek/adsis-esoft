import {
  UserService,
  UserMockServiceImpl,
} from '@adsis-esoft/user/data-access';
import { provider } from '@adsis-esoft/common/utilities';
import { AppElement } from './app.element';
import './app.provider';

describe('AppElement', () => {
  let app: AppElement;

  provider.add(UserService, UserMockServiceImpl);

  beforeAll(() => {
    app = new AppElement();
  });

  it('should create successfully', () => {
    expect(app).toBeTruthy();
  });

  it('should have a greeting', () => {
    vi.spyOn(app, 'connectedCallback');

    app.connectedCallback();

    const h1 = '<span> <strong>Aloha</strong> ADSis &amp; ESoft 👋 </span>';
    expect(app.querySelector('h1')!.innerHTML).toContain(h1);
  });
});
