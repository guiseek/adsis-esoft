import { User } from '@adsis-esoft/common/interfaces';
import { UserService } from '../ports/user.service';
import { UserFacade } from '../ports/user.facade';
import { BehaviorSubject } from 'rxjs';

export class UserFacadeImpl implements UserFacade {
  #users = new BehaviorSubject<User[]>([]);
  users$ = this.#users.asObservable();

  constructor(private userService: UserService) {}

  loadUsers() {
    this.userService.findAll().subscribe((users) => {
      this.#users.next(users);
    });
  }
}
