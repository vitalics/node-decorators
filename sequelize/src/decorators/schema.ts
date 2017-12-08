import { getMeta } from '../meta';

/**
 * Defines Schema field
 * @param {*} type Field type
 */
export function SchemaField(type: any) {
  return (target: any, name: string) => {
    let field = getMeta(target).schema[name] || {};

    field = { ...field, type };

    getMeta(target).schema[name] = field;
  };
}
/**
 * Validates Schema field
 * @param {*} type Field type
 */
export function ValidateField(key: string, value: any) {
  return (target: any, name: string) => {
    let field = getMeta(target).schema[name] || {};

    field = {
      ...field,
      validate: {
        ...field.validate,
        [key]: value
      }
    };

    getMeta(target).schema[name] = field;
  };
}

/**
 * Defines getter method
 */
export function GetterMethod() {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    getMeta(target).methods.getter[name] = descriptor;
  };
}

/**
 * Defines setter method
 */
export function SetterMethod() {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    getMeta(target).methods.setter[name] = descriptor;
  };
}

/**
 * Defines validator method
 */
export function Validate() {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    getMeta(target).methods.validator[name] = descriptor;
  };
}
