import { fail } from 'assert';
import { FunctionType } from '../types';
export function Fail(message: string): MethodDecorator;
export function Fail<T>(
    expected: T | string,
    message?: string,
    _operator = '!==',
    _stackStartFunction: FunctionType = fail
): MethodDecorator {
    const failArgs = [...arguments];
    return (_target: object, _propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
        const oldDescriptor = descriptor.value as FunctionType;
        descriptor.value = function wrapper(...args: any[]) {
            if (typeof expected === 'string' && failArgs.length === 1) {
                fail(expected);
            }
            const fnResult = oldDescriptor.apply(this, args) as T;
            fail(fnResult, expected, message);
            return fnResult;
        };
        return descriptor;
    };
}
