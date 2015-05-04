module Core.Component {
    export interface IObserver<T> {
        observe: (object: T) => IObserver<T>;
        unobserve: () => void;
        silent(): T;
    }
}