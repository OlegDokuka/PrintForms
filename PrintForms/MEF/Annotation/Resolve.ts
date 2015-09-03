module PF.Annotation {
    import Class = Type.Class;
    import Resolver = Component.Resolver;
    import Injector = Component.Injector;

    declare var __extends;
    /**
     * Mark class as class that need several injection
     * Resolve decrator call when of annotated class create new instance
     * and Injector inject on fly field that marked @inject
     * @param {Class} clazz - class, marked with @resolve
     * @returns decorated class
     */
    export function resolve(clazz: Class) {
        let classWrapper = function (...argArray: any[]) {
            clazz.apply(this, argArray);
            let dependencyList = Resolver.resolve(clazz);

            for (let propertyName in dependencyList) {
                let propertyType = dependencyList[propertyName];
                this[propertyName] = Injector.instance(propertyType);
            }
        };
        __extends(classWrapper, clazz);
        return <any>classWrapper;
    }
}