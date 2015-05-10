module PF.Annotation {
    /**
     * 
     * @param {any} prototype
     * @param {string} propertyName
     * @param {TypedPropertyDescriptor<any>} propertyDescriptor
     * @returns
     */
    export function property(prototype: any, propertyName: string,
        propertyDescriptor: TypedPropertyDescriptor<any>) {
        let ctor = prototype.constructor;

        if (!ctor || !(prototype instanceof View.DependencyObject)) {
            return;
        }

        ctor["registeredProperties"].push(propertyName);
    }
} 