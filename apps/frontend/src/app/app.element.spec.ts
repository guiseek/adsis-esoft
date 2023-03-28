import { UserMockService, UserService } from './user/services';
import { provider } from '@adsis-esoft/common/utilities';
import { AppElement } from './app.element';

describe('AppElement', () => {
  let app: AppElement;

  provider.add(UserService, UserMockService);

  beforeEach(() => {
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
