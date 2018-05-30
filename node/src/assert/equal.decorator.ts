import 'reflect-metadata';
import { equal } from 'assert';
import { FunctionType } from '../types';

export function Equal<T>(expected: T, message?: string): any {
    return function equalDecorator(_target: object, _propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) {
        const oldDescriptor = descriptor.value as FunctionType;
        descriptor.value = function wrapper(...args: any[]) {
            const fnResult = oldDescriptor.apply(this, args) as T;
            equal(fnResult, expected, message);
            return fnResult;
        };
        return descriptor;
    }
}