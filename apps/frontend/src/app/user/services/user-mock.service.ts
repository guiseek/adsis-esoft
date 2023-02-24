import { User } from '@adsis-esoft/common/interfaces';
import { UserService } from './ports/user.service';

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

export class UserMockService implements UserService {
  async findAll(): Promise<User[]> {
    return Promise.resolve(USERS_MOCK);
  }

  async findOne(id: number): Promise<User> {
    const user = USERS_MOCK.find((user) => user.id === id);
    if (!user) throw 'User not found';
    return Promise.resolve(user);
  }
}
