import express, { Router, json, Handler } from 'express';
import { ctrl } from './ctrl';
import './user/ctrl';

export class App {
  private server = express();

  useMiddleware(nextFn: Handler): void {
    this.server.use(nextFn);
  }

  useRouter(router: Router): void {
    this.server.use(router);
  }

  listen(port: string | number, callback: () => void) {
    return this.server.listen(port, callback);
  }
}

ctrl.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});

const app = new App();
app.useRouter(ctrl.router);
app.useMiddleware(json());

export { app };
