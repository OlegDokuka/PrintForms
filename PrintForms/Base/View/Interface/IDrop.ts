module Base.View.Interface {
    export interface IDrop {
        onDrop:(dragged: IDrag)=>void;
    }
}