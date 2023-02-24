import { User } from '@adsis-esoft/common/interfaces';
import { UserService } from './ports/user.service';

export class UserDataService implements UserService {
  findAll(): Promise<User[]> {
    throw new Error('Método com banco não implementado.');
  }
  findOne(id: number): Promise<User> {
    throw new Error('Método com banco não implementado.');
  }
}
