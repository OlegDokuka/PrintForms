module PF.ComponentModel {
    import handler = PF.Annotation.handler;

    export class DocumentViewModel extends GroupViewModel {
        @handler("onPropertyChanged")
        presenter: GroupViewModel;
    }
}
 