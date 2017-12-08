import { Model, Instance, Sequelize, DefineAttributes } from 'sequelize';
import { Container } from '@decorators/di';

import { getMeta, Fn, SequelizeClass, SequelizeMeta } from './meta';

/**
 * Create sequelize model out of @decorators/sequelize class
 *
 * @param {SequelizeClass} modelClass
 *
 * @returns {Object} Mongoose model itself
 */
export function model<T>(
  sequelize: Sequelize,
  modelClass: SequelizeClass
): Model<Instance<T> & T, T> {
  const { meta, instance } = getArtifacts(modelClass);
  const attributes: DefineAttributes = {};

  console.log(instance, wrapFunction);

  Object.keys(meta.schema)
    .forEach((key: string) => {
      attributes[key] = meta.schema[key];
    });

  return sequelize.define(meta.name, attributes, meta.options) as any;
}

/**
 * Wrap function with correct context just to make sure,
 * that functions will be executed with scope of class
 * in order to get DI working properly
 *
 * @param {Function} fn
 * @param {any} instance
 *
 * @returns {Function}
 */
function wrapFunction(fn: Fn, instance): Fn {
  return function(next) {
    let fullCtx = instance;

    if (this) {
      fullCtx = { ...instance, ...(this || {}) };
      Object.setPrototypeOf(fullCtx, Object.getPrototypeOf(this));
    }

    return fn.apply(fullCtx, [next]);
  };
}

/**
 * Extract meta and classInstance of the injectable
 *
 * @param {SequelizeClass} modelClass
 *
 * @returns {{ meta: SequelizeMeta, instance: SequelizeClass }}
 */
function getArtifacts(modelClass: SequelizeClass): { meta: SequelizeMeta, instance: SequelizeClass } {
  const instance: SequelizeClass = Container.get(modelClass);
  const meta: SequelizeMeta = getMeta(instance);

  return { meta, instance };
}
