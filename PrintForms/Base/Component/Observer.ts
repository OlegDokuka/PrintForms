/// <reference path="../../Core/Component/IObserver"/>
module Base.Component {
    export class Observer<T> implements Core.Component.IObserver<T> {
        constructor(callback: (data: any) => void) {
        }
        public observe(object: Object): Observer<T> {
            return this;
        }
        public unobserve(): void {

        }

        public silent(): T {
            return null;
        }
    }

} 