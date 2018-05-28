import { doesNotThrow } from 'assert';
import { FunctionType } from '../types';

export function DoesNotThrow(_error?: FunctionType, _message?: string): MethodDecorator {
    const args = [...arguments];
    return (_target: object, _propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
        if (args.length === 1 && args[0] === 'string') {
            doesNotThrow(descriptor.value, args[0]);
        }
        if (args.length === 1 && args[0] === 'function') {
            doesNotThrow(descriptor.value, args[0]);
        }
        if (args.length === 2) {
            doesNotThrow(descriptor.value, args[0], args[1]);
        }
        return descriptor;
    };
}
