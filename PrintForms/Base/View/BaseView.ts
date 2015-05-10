/// <reference path="../../Core/View/DependencyObject.ts"/>
module PF.View {
    export class BaseView<T extends ComponentModel.BaseViewModel> extends PF.View.DependencyObject<T> {

        protected element: any;

        constructor() {
            super();
            this.createElement();
            this.initializeElement();
        }
        protected createElement() {

        }
        protected initializeElement() {
            
        }

        protected setValue(propertyName: string) {
            var newValue = this[propertyName];

            this[propertyName] = newValue;
            this.dataContext[propertyName] = newValue;
        }
    }
}