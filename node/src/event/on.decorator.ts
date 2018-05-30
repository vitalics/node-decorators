import 'reflect-metadata';

export function On(name: string): any {
    return (target: object, propertyKey: string | symbol, desciptor: TypedPropertyDescriptor<any>) => {
        Reflect.defineMetadata('__event__', { name, value: desciptor.value, type: 'on' }, target.constructor, propertyKey);
        return desciptor;
    };
}
