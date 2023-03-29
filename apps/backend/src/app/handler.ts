import { Observable, take } from 'rxjs';
import { Response } from 'express';

export function handler<T>(res: Response, source: Observable<T>) {
  source.pipe(take(1)).subscribe((value) => res.json(value));
}
