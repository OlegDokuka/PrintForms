module PF.View {
    export class ViewFactory {
        private static registeredViews = [];
        private static registeredViewModels = [];

        public static create<T extends PF.ComponentModel.BaseViewModel>(viewModel: T): View<T> {
            var index: number = ViewFactory.registeredViewModels.indexOf(viewModel.constructor),
                viewCtor: { new (): View<T> },
                view: View<T>;

            if (index < 0) {
                throw new Error("No registered type");
            }

            viewCtor = ViewFactory.registeredViews[index];
            view = new viewCtor();
            view.dataContext = viewModel;
            return view;
        }

        public static register<T extends PF.ComponentModel.BaseViewModel>(viewModel: { new (): T; }, view: { new (): View<T> }) {
            ViewFactory.registeredViews.push(view);
            ViewFactory.registeredViewModels.push(viewModel);
        }
    }
}