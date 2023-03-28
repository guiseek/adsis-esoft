import { Service } from '@adsis-esoft/shared/data-access';
import { User } from '@adsis-esoft/common/interfaces';
import { UserService } from '../ports/user.service';

export class UserDataServiceImpl implements UserService {
  constructor(private service: Service<User>) {}

  findAll() {
    return this.service.findAll('users');
  }

  findOne(id: number) {
    return this.service.findOne('users', id);
  }
}
