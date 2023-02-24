import { setProvider, useProvider } from '@adsis-esoft/common/utilities';
import { controller } from '../controller';
import { UserMockService, UserService } from './services';

setProvider(UserService, UserMockService);

const service = useProvider(UserService);

controller.get('/api/users', (req, res) => {
  service.findAll().then((users) => {
    res.json(users);
  });
});

controller.get('/api/users/:id', ({ params }, res) => {
  service.findOne(+params.id).then((user) => res.json(user));
});
