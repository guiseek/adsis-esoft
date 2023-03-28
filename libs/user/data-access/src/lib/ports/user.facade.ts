import { User } from '@adsis-esoft/shared/api-interfaces';
import { Observable } from 'rxjs';

export abstract class UserFacade {
  abstract users$: Observable<User[]>;
  abstract loadUsers(): void;
}
