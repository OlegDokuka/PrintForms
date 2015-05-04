module Base.View {
    export class LinearLayout<T extends Base.ComponentModel.GroupViewModel> extends GroupView<T>{
        private _orientation: LinearLayout.LayoutOrientation = LinearLayout.LayoutOrientation.VERTICAL;

        protected registerProperties(propertyList: Array<String>): void {
            super.registerProperties(propertyList);
            propertyList.push("orientation");
        }

        public get orientation(): LinearLayout.LayoutOrientation {
            return this._orientation
        }
        pub
    }

    export module LinearLayout {
        export enum LayoutOrientation {
            HORIZONTAL,
            VERTICAL
        }
    }
} 