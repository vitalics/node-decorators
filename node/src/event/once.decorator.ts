import 'reflect-metadata';

export function Once(name: string): MethodDecorator {
    return (target: any, propertyKey: string | symbol, desciptor: TypedPropertyDescriptor<any>) => {
        Reflect.defineMetadata('__event__', { name, value: desciptor.value, type: 'once' }, target, propertyKey);
        return desciptor;
    };
}
