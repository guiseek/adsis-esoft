import { UserService } from '@adsis-esoft/shared/api-interfaces';
import { provider } from '@adsis-esoft/shared/util-provider';
import { controller } from '../controller';
import { handler } from '../handler';

const service = provider.use(UserService);

controller.get('/api/users', (req, res) => {
  handler(res, service.findAll());
});

controller.get('/api/users/:id', ({ params }, res) => {
  handler(res, service.findOne(+params.id));
});
