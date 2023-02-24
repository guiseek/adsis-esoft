import { User } from '@adsis-esoft/common/interfaces';
import { UserService } from './ports/user.service';

export class UserDataService implements UserService {
  async findAll(): Promise<User[]> {
    return fetch('/api/users').then((res) => res.json());
  }

  async findOne(id: number): Promise<User> {
    return fetch(`/api/users/${id}`).then((res) => res.json());
  }
}
