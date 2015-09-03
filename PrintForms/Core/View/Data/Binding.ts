module Core.View.Data {
    export class Binding {
        public sourcePropertyName: string;
        public targetPropertyName: string;
        public source: ComponentModel.INotifyPropertyChanged;
        public target: DependencyObject<ComponentModel.INotifyPropertyChanged>;

        private _targetProxy: Proxy;
        private _sourceProxy: Proxy;

        public create() {
            this._sourceProxy = Proxy.add(this.source, this.sourcePropertyName, this.targetProxySetter.bind(this));
            this._targetProxy = Proxy.add(this.target, this.targetPropertyName, this.sourceProxySetter.bind(this));
        }

        private sourceProxySetter(value: any) {
            this._sourceProxy.setSourceValue(value);
        }
        private targetProxySetter(value: any) {
            this._targetProxy.setSourceValue(value);
        }
    }
    export module Binding {

        /** 
        * Binding Builder
        * Simple way to create binding
        * **/
        export class Builder {
            private _binding: Binding;

            constructor() {
                this._binding = new Binding();
            }
            /** 
            * Set dependency object to binding 
            * @param target View in other word
            * **/
            public connect<T extends ComponentModel.INotifyPropertyChanged>(target: DependencyObject<T>): BuilderHelper {
                this._binding.target = target;
                return new BuilderHelper(this, this._binding, "targetPropertyName");
            }

            /** 
            * Set view model to binding 
            * @param source ViewModel in other word
            * **/
            public with(source: ComponentModel.INotifyPropertyChanged): BuilderHelper {
                this._binding.source = source;
                return new BuilderHelper(this, this._binding, "sourcePropertyName");
            }

            public bind(): Binding {
                this._binding.create();
                return this._binding;
            }


            public static create():Builder {
                return new Builder();
            }
        }

        class BuilderHelper {
            private _builder: Builder;
            private _binding: Binding;
            private _settedPropertyName: string;

            constructor(builder: Builder, binding: Binding, settedPropertyName: string) {
                this._builder = builder;
                this._binding = binding;
                this._settedPropertyName = settedPropertyName;
            }

            /** On what property name it should be create binding
            * @param propertyName Property name
            *  **/
            public on(propertyName: string): Builder {
                this._binding[this._settedPropertyName] = propertyName;
                return this._builder;
            }
        }
    }
}
