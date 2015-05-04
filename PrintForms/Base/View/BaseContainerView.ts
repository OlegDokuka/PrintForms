///<reference path="Interface/IContainer"/>
///<reference path="../ComponentModel/BaseContainerViewModel"/>
module Base.View {
    export class BaseContainerView<T extends ComponentModel.BaseContainerViewModel> extends View<T> implements Interface.IContainer {
        private _children = new Array<Interface.IChild>();

        protected initializeDataContext() {
            this.dataContext.children.CollectionChanged.Subscribe(this.onDataContextChildrenCollectionChanged, this);
        }
        
        public removeViewAt(index: number): boolean {
            return this._children.splice(index, 1).length > 0;
        }
        public removeViews(start: number, count: number): boolean {
            return this._children.splice(start, count).length > 0;
        }
        public removeView<T extends Core.ComponentModel.INotifyPropertyChanged> (child: View<T>): boolean {
            var index = this._children.indexOf(child, 0);
            if (index != undefined) {
                this._children.splice(index, 1);
                return true;
            }
            return false;
        }
        public appendView<T extends Core.ComponentModel.INotifyPropertyChanged>(child: View<T>): void {
            this._children.push(child);
            this.element.append(child['element']);
            child["_parent"] = this;

            this.dataContext.children.Observer.silent().push(child.dataContext);
        }
        public prependView<T extends Core.ComponentModel.INotifyPropertyChanged>(child: View<T>): void {
            this._children.unshift(child);
            this.element.prepend(child['element']);
            child["_parent"] = this;
            this.dataContext.children.Observer.silent().unshift(child.dataContext);
        }

        protected onDataContextChildrenCollectionChanged(data: Core.Collections.Specialized.NotifyCollectionChangedData, sender: any) {
            data.NewItems.forEach((viewModel) => {
                var view = ViewFactory.create(viewModel);
                this._children.push(view);
                this.element.append(view['element']);
                view["_parent"] = this;
            });
        }
    }
}
