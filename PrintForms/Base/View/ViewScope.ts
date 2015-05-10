module PF.View {
    import BaseViewModel = PF.ComponentModel.BaseViewModel;

    export class ViewScope {
        private static domElementList = new Array<HTMLElement>();
        private static viewList = new Array<View<BaseViewModel>>();

        public static put<T extends View<BaseViewModel>>(domElement: HTMLElement, view: T): void {
            var position: number;

            position = ViewScope.domElementList.push(domElement);
            ViewScope.viewList.push(view);
        }
        public static get<T extends View<BaseViewModel>>(domElement: HTMLElement): T {
            var index = ViewScope.domElementList.indexOf(domElement),
                view: T;

            if (index < 0) {
                throw new Error("No registered view for DOM element");
            }

            return <T>ViewScope.viewList[index];
        }
    }
}