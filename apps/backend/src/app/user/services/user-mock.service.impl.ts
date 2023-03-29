import { UserService, User } from '@adsis-esoft/shared/api-interfaces';
import { of } from 'rxjs';

const USERS_MOCK: User[] = [
  {
    id: 0,
    name: 'Gui',
  },
  {
    id: 1,
    name: 'Thiago',
  },
];

export class UserMockServiceImpl implements UserService {
  findAll() {
    return of(USERS_MOCK);
  }

  findOne(id: number) {
    const user = USERS_MOCK.find((user) => user.id === id);
    if (!user) throw 'User not found';
    return of(user);
  }
}
