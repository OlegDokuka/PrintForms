module PF.Annotation {
    /**
     * Handle function with specify name when in the property set
     * value 
     * @param {string} functionName specify property name
     * @returns {PropertyDescriptor} new wrapper property descriptor
     */
    export function handler(functionName: string) {
        return (prototype: any, pName: string, pDescriptor?: TypedPropertyDescriptor<any>) => {
            let localValue: any,
                getter: () => any,
                setter: (value: any) => void;

            getter = pDescriptor ?
                (pDescriptor.get ? pDescriptor.get : () => pDescriptor.value) :
                () => localValue;

            setter = pDescriptor ?
                (pDescriptor.set ?
                    function (value: any) {
                        let handledFunction;

                        pDescriptor.set(value);

                        if (handledFunction = this[functionName]) {
                            handledFunction.call(this, pName, value);
                        }
                    } :
                    function (value: any) {
                        let handledFunction;

                        pDescriptor.value = value;

                        if (handledFunction = this[functionName]) {
                            handledFunction.call(this, pName, value);
                        }
                    }) :
                function (value: any) {
                    let handledFunction;

                    localValue = value;

                    if (handledFunction = this[functionName]) {
                        handledFunction.call(this, pName, value);
                    }
                };


            Object.defineProperty(prototype, pName, {
                enumerable: pDescriptor ? pDescriptor.enumerable : true,
                configurable: pDescriptor ? pDescriptor.configurable : true,
                get: getter,
                set: setter
            });
        };
    }
}