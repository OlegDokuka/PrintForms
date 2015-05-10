module PF.View.Interface {
    export interface IContainer {
        removeViewAt: (index: number) => boolean;
        removeViews: (start: number, count: number) => boolean;
        removeView: (child: IChild) => boolean;
        appendView: (child: IChild) => void;
        prependView: (child: IChild) => void;
    }
}