///<reference path="Interface/IChild"/>
///<reference path="DraggableView"/>
module Base.View {
    export class View<T extends Core.ComponentModel.INotifyPropertyChanged> extends DraggableView<T> implements Interface.IChild{
        private _parent: Interface.IContainer = null;
        
        protected initializeElement() {
            ViewScope.put(this.element[0], this);

            super.initializeElement();
        }

        public get parent(): Interface.IContainer {
            return this._parent;
        }
    }
}