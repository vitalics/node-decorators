export type Fn = (...args: any[]) => any;

export class SequelizeMeta {
  name: string;
  options: object = {};

  schema: object = {};
  methods = {
    getter: {},
    setter: {},
    validator: {}
  }
}

export interface SequelizeClass extends Object {
  __sequelize_meta__?: SequelizeMeta;

  new (...deps: any[]);
}

export function getMeta(target: SequelizeClass): SequelizeMeta {
  if (!target.__sequelize_meta__) {
    target.__sequelize_meta__ = new SequelizeMeta();
  }

  return target.__sequelize_meta__;
}
