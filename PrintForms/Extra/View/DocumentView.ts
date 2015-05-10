module PF.View {
    import GroupViewModel = ComponentModel.GroupViewModel;
    import BaseViewModel = ComponentModel.BaseViewModel;

    export class DocumentView extends GroupView<ComponentModel.DocumentViewModel> {
        private _presenter: GroupView<ComponentModel.GroupViewModel>;

        protected createElement() {
            this.element = $("<div>").appendTo("body");
        }
        protected initializeElement() {
            this.element.attr("ui-document", "");

            super.initializeElement();
        }

        public removeViewAt(index: number): boolean {
            return this._presenter.removeViewAt(index);
        }
        public removeViews(start: number, count: number): boolean {
            return this._presenter.removeViews(start, count);
        }
        public removeView<T extends BaseViewModel>(child: View<T>): boolean {
            return this._presenter.removeView(child);
        }
        public appendView<T extends BaseViewModel>(child: View<T>): void {
            this._presenter.appendView(child);
        }
        public prependView<T extends BaseViewModel>(child: View<T>): void {
            this._presenter.prependView(child);
        }
    }
}