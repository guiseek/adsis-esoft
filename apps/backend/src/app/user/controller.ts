// import { setProvider, useProvider } from '@adsis-esoft/common/utilities';
import { provider } from '@adsis-esoft/shared/util-provider';
import { controller } from '../controller';
import { UserMockService, UserService } from './services';

provider.add(UserService, UserMockService);
// setProvider(UserService, UserMockService);

const service = provider.use(UserService);

controller.get('/api/users', (req, res) => {
  service.findAll().then((users) => {
    res.json(users);
  });
});

controller.get('/api/users/:id', ({ params }, res) => {
  service.findOne(+params.id).then((user) => res.json(user));
});
