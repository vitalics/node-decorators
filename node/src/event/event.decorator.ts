import 'reflect-metadata';

export function Event(): ClassDecorator {
    // tslint:disable-next-line:ban-types
    return <T extends Function>(target: T): any => {
        const proxy = new Proxy(target, {
            construct: (obj: any, args: any) => {
                const instance = Reflect.construct(obj, [...args])
                const methods = Object.getOwnPropertyNames(target.prototype);
                for (const prop of methods) {
                    const meta = Reflect.getOwnMetadata('__event__', obj, prop);
                    if (meta && meta.type === 'on') {
                        instance.on(meta.name, meta.value);
                    }
                    if (meta && meta.type === 'once') {
                        instance.once(meta.name, meta.value);
                    }
                    // if (meta && meta.type === 'emit') {
                    //     instance.emit(meta.name)
                    // }
                }
                return instance;
            }
        });
        return proxy;
    };
}
