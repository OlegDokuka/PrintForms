/// <reference path="Interface/IDrag"/>
module Base.View {
    import INotifyPropertyChanged = Core.ComponentModel.INotifyPropertyChanged;
    export class DraggableView<T extends INotifyPropertyChanged> extends BaseView<T> implements Interface.IDrag {
        protected initializeElement() {
            this.element.draggable({
                cancel: "a.ui-icon", // clicking an icon won't initiate dragging
                revert: "invalid", // when not dropped, the item will revert back to its initial position
                //containment: "document",
                //helper: "clone",
                cursor: "move"
            });

            super.initializeElement();
        }

        public onDrag() {

        }
    }
}