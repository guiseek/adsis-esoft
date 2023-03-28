import { User } from '@adsis-esoft/shared/api-interfaces';

export abstract class UserService {
  abstract findAll(): Promise<User[]>;
  abstract findOne(id: number): Promise<User>;
}
