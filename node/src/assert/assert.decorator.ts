import * as nodeAssert from 'assert';
import { FunctionType } from '../types';

export function Assert(message?: string): MethodDecorator {
    return  (_target: object, _propertykey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
        const oldDescriptor = descriptor.value as FunctionType;
        descriptor.value = function assertWrapper(...args: any[]) {
            const fnResult = oldDescriptor.apply(this, args);
            nodeAssert(fnResult, message);
            return fnResult;
        };
        return descriptor;
    }
}
