import { UserService } from '@adsis-esoft/shared/api-interfaces';
import { of } from 'rxjs';

export class UserDataServiceImpl implements UserService {
  findAll() {
    return of([]);
  }

  findOne(id: number) {
    return of({
      id,
      name: '',
    });
  }
}
