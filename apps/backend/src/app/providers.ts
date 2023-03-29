import { Token, provider } from '@adsis-esoft/shared/util-provider';
import { UserService } from '@adsis-esoft/shared/api-interfaces';
import { UserDataServiceImpl, UserMockServiceImpl } from './user/services';
import { Schema } from 'mongoose';
import { mongo } from './mongo';

const MONGO_CONFIG_TOKEN = new Token('mongo.config');
const MONGO_CONNECTION_TOKEN = new Token('mongo.connection');
const USER_MODEL_TOKEN = new Token('user.model');
const USER_CONFIG_TOKEN = new Token('user.config');

provider.add(MONGO_CONFIG_TOKEN, {
  uri: `mongodb+srv://adsis-esoft:adsis-esoft@nosql.12rxdux.mongodb.net/?retryWrites=true&w=majority`,
  options: {},
});

provider.add(MONGO_CONNECTION_TOKEN, mongo.get, [MONGO_CONFIG_TOKEN]);

provider.add(USER_CONFIG_TOKEN, {
  name: 'User',
  schema: new Schema({ name: 'string' }),
});
provider.add(USER_MODEL_TOKEN, mongo.model, [USER_CONFIG_TOKEN]).then(() => {
  provider.add(UserService, UserDataServiceImpl, [USER_MODEL_TOKEN]);
});
