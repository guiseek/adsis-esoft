import { User } from '@adsis-esoft/common/interfaces';
import { UserService } from './ports/user.service';
import { Service } from '@adsis-esoft/common/data-access';

export class UserDataService implements UserService {
  constructor(private service: Service<User>) {}

  findAll() {
    return this.service.findAll('users');
    // return fetch('/api/users').then((res) => res.json());
  }

  findOne(id: number) {
    return this.service.findOne('users', id);
    // return fetch(`/api/users/${id}`).then((res) => res.json());
  }
}
