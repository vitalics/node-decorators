import { ok } from 'assert';

export function Ok(message?: string): MethodDecorator {
  return function okMethod(_target: object, _propertykey: string | symbol, descriptor: TypedPropertyDescriptor<any>) {
    const oldDescriptor = descriptor.value as (...args: any[]) => any;
    descriptor.value = function wrapper(...args: any[]) {
      const fnResult = oldDescriptor.apply(this, args);
      ok(fnResult, message);
      return fnResult;
    };
    return descriptor;
  };
}
