///<reference path="Interface/IChild"/>
///<reference path="ViewScope"/>
module PF.View {
    export class View<T extends ComponentModel.BaseViewModel> extends BaseView<T>
        implements Interface.IChild, Interface.IDrag {
        private _parent: Interface.IContainer = undefined;

        protected initializeElement() {
            ViewScope.put(this.element[0], this);
            this.element.draggable({
                cancel: "a.ui-icon", // clicking an icon won't initiate dragging
                revert: "invalid", // when not dropped, the item will revert back to its initial position
                //containment: "document",
                //helper: "clone",
                cursor: "move"
            });

            super.initializeElement();
        }

        public get parent(): Interface.IContainer {
            return this._parent;
        }

        public onDrag() {

        }
    }
}