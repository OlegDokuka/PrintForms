/// <reference path="../../Core/Annotation/Handler"/>
module PF.ComponentModel {
    import ObservableCollection = Collections.ObjectModel.ObservableCollection;
    import handler = Annotation.handler;

    export class GroupViewModel extends BaseViewModel {
        @handler("onPropertyChanged")
        public children = new ObservableCollection<BaseViewModel>();
    }
} 