import express, { Router, json, Handler } from 'express';
import { controller } from './core/controller';
import './user/controller';

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

controller.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});

const app = new App();
app.useRouter(controller.router);
app.useMiddleware(json());

export { app };
