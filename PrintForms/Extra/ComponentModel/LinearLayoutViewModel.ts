/// <reference path="../../Base/ComponentModel/GroupViewModel"/>
module PF.ComponentModel {
    import handler = Annotation.handler;

    export class LinearLayoutViewModel extends GroupViewModel {
        @handler("onPropertyChanged")
        public orientation: any;
    }
}