type Type<T = unknown> = new (...params: unknown[]) => T;

type AbstractType<T> = abstract new (...params: any[]) => T;

interface TypeOf<T> extends Function {
  new (...params: any[]): T;
}

type Callback = (params: any) => any;

export class Token<T = unknown> {
  constructor(public name: string | T) {}
}

const container = new Map();
const relations = new Map();

export const provider = {
  async add<T>(
    type: AbstractType<T> | Token,
    concrete: TypeOf<T> | Callback | InstanceType<TypeOf<T>>,
    deps: Type[] | Token[] = []
  ) {
    relations.set(
      type,
      deps.map((d) => this.use(d))
    );
    if (type instanceof Token) {
      let promise;

      if (concrete instanceof Function || concrete instanceof Promise) {
        promise =
          concrete instanceof Function
            ? (concrete as Function)(...relations.get(type))
            : concrete;

        await promise.then((value: T) => container.set(type, value));
        return;
      }

      container.set(type, concrete);
      return;
    }
    if (typeof concrete === 'function') {
      const clazz = concrete as Type<typeof concrete>;
      const instance = new clazz(...relations.get(type));
      if (instance instanceof concrete) {
        container.set(type, instance);
      }
    }
  },
  use<T>(type: AbstractType<T> | Token) {
    const concrete = container.get(type);

    if (!concrete) {
      throw new Error(`O provider ${type.name} ainda não foi registrado`);
    }

    return concrete as T extends Token ? T : InstanceType<AbstractType<T>>;
  },
};
