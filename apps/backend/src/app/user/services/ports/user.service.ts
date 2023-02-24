import { User } from '@adsis-esoft/common/interfaces';

export abstract class UserService {
  abstract findAll(): Promise<User[]>;
  abstract findOne(id: number): Promise<User>;
}
