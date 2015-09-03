module Core.View.Data {
    export class Proxy {
        private oldPropertyDescriptor: PropertyDescriptor;
        private object: Object;
        private propertyName: string;
        private proxyFunction: (newValue:any, oldValue:any)=>any;

        public remove() {
            Object.defineProperty(this.object, this.propertyName, this.oldPropertyDescriptor);
        }

        private initialize(){
            this.oldPropertyDescriptor.value;
            Object.defineProperty(this.object, this.propertyName, {
                configurable : true,
                enumerable: true,
                get: this.getter.bind(this),
                set: this.setter.bind(this)
            });
        }

        private getter(): any {
            return this.oldPropertyDescriptor.get ? this.oldPropertyDescriptor.get() : this.oldPropertyDescriptor.value;
        }

        private setter(value: any) {
            var oldValue = this.getter();
            if (value === oldValue) {
                return;
            }
            this.proxyFunction(value, oldValue);
        }

        public setSourceValue(value: any) {
            if (this.oldPropertyDescriptor.set) {
                this.oldPropertyDescriptor.set(value);
            }
            else {
                this.oldPropertyDescriptor.value = value;
            }

        }

        public static add(object: Object, propertyName: string, proxyFunction:(newValue:any, oldValue:any)=>any): Proxy {
            var proxy = new Proxy();
            proxy.object = object;
            proxy.propertyName = propertyName;
            proxy.oldPropertyDescriptor = Object.getOwnPropertyDescriptor(object, propertyName);
            proxy.proxyFunction = proxyFunction;
            proxy.initialize();
            return proxy;
        }
    }
}