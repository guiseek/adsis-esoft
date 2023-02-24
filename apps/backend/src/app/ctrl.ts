import { PathArgs } from '@adsis-esoft/common/interfaces';
import { Router, Request, Response } from 'express';

class Ctrl {
  router: Router = Router();

  get<P extends string>(
    path: P,
    handler: (req: Request<PathArgs<P>>, res: Response) => void
  ): void {
    this.router.get(path, handler);
  }

  post<P extends string, B>(
    path: P,
    handler: (req: Request<PathArgs<P>, B>, res: Response<B>) => void
  ): void {
    this.router.post(path, handler);
  }

  put<P extends string>(
    path: P,
    handler: <B = any>(req: Request<PathArgs<P>, B>, res: Response<B>) => void
  ): void {
    this.router.put(path, handler);
  }

  patch<P extends string>(
    path: P,
    handler: <B = any>(req: Request<PathArgs<P>, B>, res: Response) => void
  ): void {
    this.router.patch(path, handler);
  }

  delete<P extends string>(
    path: P,
    handler: (req: Request<PathArgs<P>>, res: Response) => void
  ): void {
    this.router.delete(path, handler);
  }

  options<P extends string>(
    path: P,
    handler: <B = any>(req: Request<PathArgs<P>, B>, res: Response<B>) => void
  ): void {
    this.router.options(path, handler);
  }
}

export const ctrl = new Ctrl();
