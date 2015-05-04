 /**
    * User-inteface namespace
    * @namespace
    */
module Core.View {
    /**
      * @class
      */
    export class DependencyObject<T extends ComponentModel.INotifyPropertyChanged> {
        private _dataContext: T = null;
        private registeredProperties = new Array<String>();

        constructor() {
            this.registerProperties(this.registeredProperties);
        }

        /* 
        * 
        * 
        */
        protected registerProperties(propertyList:Array<String>):void {

        }


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
            this.registeredProperties.forEach((propertyKey:string) => {
                this[propertyKey] = this._dataContext[propertyKey];
            });

            this._dataContext.propertyChanged.Subscribe(this.onDataContextPropertyChanged, this);
        }

        protected onDataContextPropertyChanged(e: ComponentModel.PropertyChangedData) {
            this[e.name] = e.value;
        }
    }
}