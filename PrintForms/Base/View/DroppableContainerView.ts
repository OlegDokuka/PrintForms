/// <reference path="BaseContainerView"/>
/// <reference path="Interface/IDrop"/>
module Base.View {
    import INotifyPropertyChanged = Core.ComponentModel.INotifyPropertyChanged;
    export class DroppableContainerView<T extends ComponentModel.BaseContainerViewModel> extends BaseContainerView<T> implements Interface.IDrop {

        protected initializeElement() {
            this.element.droppable({
                drop: (event, ui) => {
                    var view = ViewScope.get(ui.draggable[0]);

                    if (!view) {
                        throw new Error("Something bad was happed with this view");
                    }

                    this.onDrop(view);
                }
            });

            super.initializeElement();
        }

        public onDrop(draggable: View<INotifyPropertyChanged>) {
            var oldParent = draggable.parent;

            if (oldParent) {
                oldParent.removeView(draggable);
            }

            this.appendView(draggable);
        }
    }
}