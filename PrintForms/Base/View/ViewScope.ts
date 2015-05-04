module Base.View {
    import INotifyPropertyChanged = Core.ComponentModel.INotifyPropertyChanged;
    export class ViewScope {
        private static _domElementList = new Array<HTMLElement>();
        private static _viewList = new Array<View<INotifyPropertyChanged>>();

        public static put<T extends View<INotifyPropertyChanged>>(domElement: HTMLElement, view: T): void {
            var position: number;

            position = ViewScope._domElementList.push(domElement);
            ViewScope._viewList.push(view);
        }
        public static get<T extends View<INotifyPropertyChanged>>(domElement: HTMLElement): T {
            var index = ViewScope._domElementList.indexOf(domElement),
                view: T;

            if (index < 0) {
                throw new Error("No registered view for DOM element");
            }

            return <T>ViewScope._viewList[index];
        }
    }
}