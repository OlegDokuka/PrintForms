module Base.View {
    export class DocumentView extends DroppableContainerView<ComponentModel.DocumentViewModel> {
        protected createElement() {
            this.element = $("<div>").appendTo("body");
        }
    }
}