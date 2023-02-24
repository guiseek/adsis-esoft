import { User } from '@adsis-esoft/common/interfaces';
import { ctrl } from '../ctrl';

const users: User[] = [
  { id: 0, name: 'Gui' },
  { id: 1, name: 'Thiago' }
];

ctrl.get('/api/users', (req, res) => {
  res.json(users);
});

ctrl.get('/api/users/:id', ({ params }, res) => {
  res.json(users.find((user) => user.id === +params.id));
});
