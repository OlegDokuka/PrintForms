///<reference path="Interface/IContainer"/>
///<reference path="../ComponentModel/GroupViewModel"/>
module PF.View {
    import BaseViewModel = ComponentModel.BaseViewModel;
    import NotifyCollectionChangedData = Collections.Specialized.NotifyCollectionChangedData;

    export class GroupView<T extends ComponentModel.GroupViewModel> extends View<T>
        implements Interface.IContainer, Interface.IDrop {

        private _children = new Array<Interface.IChild>();

        protected initializeElement() {
            this.element.droppable({
                drop: (event, ui) => {
                    var view = ViewScope.get(ui.draggable[0]);

                    if (!view) {
                        throw new Error("Something bad was happed with this view");
                    }

                    $(ui.draggable[0]).css({ left: 0, top: 0 });

                    this.onDrop(view);
                }
            });

            super.initializeElement();
        }

        protected initializeDataContext() {
            this.dataContext.children.CollectionChanged.Subscribe(this.onDataContextChildrenCollectionChanged, this);
        }

        public removeViewAt(index: number): boolean {
            return this._children.splice(index, 1).length > 0;
        }
        public removeViews(start: number, count: number): boolean {
            return this._children.splice(start, count).length > 0;
        }
        public removeView<T extends BaseViewModel>(child: View<T>): boolean {
            var index = this._children.indexOf(child, 0);
            if (index != undefined) {
                this._children.splice(index, 1);
                return true;
            }
            return false;
        }
        public appendView<T extends BaseViewModel>(child: View<T>): void {
            this._children.push(child);
            this.element.append(child['element']);
            child["_parent"] = this;

            this.dataContext.children.Observer.silent().push(child.dataContext);
        }
        public prependView<T extends BaseViewModel>(child: View<T>): void {
            this._children.unshift(child);
            this.element.prepend(child['element']);
            child["_parent"] = this;
            this.dataContext.children.Observer.silent().unshift(child.dataContext);
        }

        public onDrop(draggable: View<BaseViewModel>) {
            var oldParent = draggable.parent;

            if (oldParent) {
                oldParent.removeView(draggable);
            }

            this.appendView(draggable);
        }

        protected onDataContextChildrenCollectionChanged(data: NotifyCollectionChangedData, sender: any) {
            data.NewItems.forEach((viewModel) => {
                var view = ViewFactory.create(viewModel);
                this._children.push(view);
                this.element.append(view['element']);
                view["_parent"] = this;
            });
        }
    }
} 