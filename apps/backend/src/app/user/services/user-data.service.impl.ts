import { User, UserService } from '@adsis-esoft/shared/api-interfaces';
import { Model } from 'mongoose';
import { from } from 'rxjs';

export class UserDataServiceImpl implements UserService {
  constructor(private userModel: Model<User>) {}

  findAll() {
    const query = this.userModel.find();
    return from(query.exec());
  }

  findOne(id: number) {
    const query = this.userModel.findOne({ id });
    return from(query.exec());
  }
}
