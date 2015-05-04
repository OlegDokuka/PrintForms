/// <reference path="../../Core/ComponentModel/INotifyPropertyChanged"/>
module Base.ComponentModel {
    export class BaseViewModel implements Core.ComponentModel.INotifyPropertyChanged {
        propertyChanged = new Core.ComponentModel.PropertyChangedEvent();

        protected onPropertyChanged(propertyName: string, value:any) {
            this.propertyChanged.Trigger({ name: propertyName, value: value });
        }
    }
}