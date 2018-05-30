import 'reflect-metadata';

export function Emit(name: string): any {
    return (target: object, propertyKey: string | symbol, desciptor: TypedPropertyDescriptor<any>) => {
        Reflect.defineMetadata('__event__', { name, value: desciptor.value, type: 'emit' }, target, propertyKey);
        return desciptor;
    };
}
