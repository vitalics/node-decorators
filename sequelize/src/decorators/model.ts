import { getMeta, SequelizeClass } from '../meta';
/**
 * Defines model class
 * @param {String} name Model name
 */
export function Model(name: string, options?: object) {
  return (target: SequelizeClass) => {
    const meta = getMeta(target.prototype);
    meta.name = name;
    meta.options = options;
  }
};
