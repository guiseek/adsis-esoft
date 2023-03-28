import { User } from '@adsis-esoft/shared/api-interfaces';
import { UserService } from '../ports/user.service';
import { of } from 'rxjs';

const USERS_MOCK: User[] = [
  {
    id: 0,
    name: 'Gui Mock',
  },
  {
    id: 1,
    name: 'Erick Mock',
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
