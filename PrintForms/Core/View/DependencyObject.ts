///<reference path="../Annotation/Property"/> 
/**
    * User-inteface namespace
    * @namespace
    */
module PF.View {
    /**
      * @class
      */
    export class DependencyObject<T extends ComponentModel.INotifyPropertyChanged> {
        private _dataContext: T = undefined;
        protected static registeredProperties = new Array<string>();


        public get dataContext(): T {
            return this._dataContext;
        }

        /**
        * DataContext setter 
        * @param {ComponentModel.INotifyPropertyChanged} dataContext
        */
        public set dataContext(dataContext: T) {
            this._dataContext = dataContext;
            this.initializeDataContext();
        }

        protected initializeDataContext() {
            this.constructor["registeredProperties"].forEach((propertyKey: string) => {
                this[propertyKey] = this._dataContext[propertyKey];
            });

            this._dataContext.propertyChanged.Subscribe(this.onDataContextPropertyChanged, this);
        }

        protected onDataContextPropertyChanged(e: ComponentModel.PropertyChangedData) {
            if (this[e.name] !== e.value) {
                this[e.name] = e.value;
            }
        }
    }
}