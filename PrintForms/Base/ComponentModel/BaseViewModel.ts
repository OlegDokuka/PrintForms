/// <reference path="../../Core/ComponentModel/INotifyPropertyChanged"/>
module PF.ComponentModel {
    export class BaseViewModel implements ComponentModel.INotifyPropertyChanged {
        propertyChanged = new PF.ComponentModel.PropertyChangedEvent();

        protected onPropertyChanged(propertyName: string, value:any) {
            this.propertyChanged.Trigger({ name: propertyName, value: value });
        }
    }
}