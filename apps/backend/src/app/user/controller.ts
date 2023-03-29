import { UserService } from '@adsis-esoft/shared/api-interfaces';
import { provider } from '@adsis-esoft/shared/util-provider';
import { controller } from '../controller';
import { handler } from '../handler';



controller.get('/api/users', (req, res) => {
  const service = provider.use(UserService);
  handler(res, service.findAll());
});

controller.get('/api/users/:id', ({ params }, res) => {
  const service = provider.use(UserService);
  handler(res, service.findOne(+params.id));
});
