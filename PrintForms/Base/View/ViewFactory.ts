module Base.View {
    export class ViewFactory {
        private static registeredViews = [];
        private static registeredViewModels = [];
        public static create<T extends Core.ComponentModel.INotifyPropertyChanged>(viewModel: T): View<T> {
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

        public static register<T extends Core.ComponentModel.INotifyPropertyChanged>(viewModel: { new (): T; }, view: { new (): View<T> }) {
            ViewFactory.registeredViews.push(view);
            ViewFactory.registeredViewModels.push(viewModel);
        }
    }
}