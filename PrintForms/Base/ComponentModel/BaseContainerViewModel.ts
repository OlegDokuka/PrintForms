module Base.ComponentModel {
    export class BaseContainerViewModel extends BaseViewModel {
        private _children = new Core.Collections.ObjectModel.ObservableCollection<Core.ComponentModel.INotifyPropertyChanged>();

        public get children() {
            return this._children;
        }
        public set children(collection: Core.Collections.ObjectModel.ObservableCollection<Core.ComponentModel.INotifyPropertyChanged>) {
            this._children = collection;
            this.onPropertyChanged("children", collection);
        }
    }
}