import { deepStrictEqual } from 'assert';
import { FunctionType } from '../types';

export function DeepStrictEqual<T>(expected: T, message?: string): MethodDecorator {
    return (_target: object, _propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>
    ) => {
        const oldDescriptor = descriptor.value as FunctionType;
        descriptor.value = function wrapper(...args: any[]) {
            const fnResult = oldDescriptor.apply(this, args) as T;
            deepStrictEqual(fnResult, expected, message);
            return fnResult;
        };
        return descriptor;
    };
}
