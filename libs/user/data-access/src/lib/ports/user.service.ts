import { User } from '@adsis-esoft/common/interfaces';
import { Observable } from 'rxjs';

export abstract class UserService {
  abstract findAll(): Observable<User[]>;
  abstract findOne(id: number): Observable<User>;
}
