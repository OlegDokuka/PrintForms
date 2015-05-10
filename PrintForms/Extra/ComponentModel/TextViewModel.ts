module PF.ComponentModel {
    import handler = Annotation.handler;

    export class TextViewModel extends BaseViewModel {
        @handler("onPropertyChanged")
        public text: string;
    }
} 