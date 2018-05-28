import { throws } from 'assert';
import { FunctionType } from '../types';

export function Throws(error: FunctionType, message?: string): MethodDecorator {
    return (_target: object, _propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
        const oldDescriptor = descriptor.value as FunctionType;
        descriptor.value = function wrapper(...args: any[]) {
            const fnResult = oldDescriptor.apply(this, args);
            throws(descriptor.value, error, message);
            return fnResult;
        }
        return descriptor;
    };
}
