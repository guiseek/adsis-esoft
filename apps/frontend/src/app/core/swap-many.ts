import { swap } from './swap';

export const swapMany = <T extends object>(template: string, values: T[]) => {
  const entries = values.map(Object.entries);
  const rows = entries.map((props) =>
    props.reduce((prev, prop) => swap(prev, ...prop), template)
  );
  return rows.join('');
};
