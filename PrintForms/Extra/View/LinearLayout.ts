module PF.View {
    import property = Annotation.property;

    export class LinearLayout<T extends ComponentModel.LinearLayoutViewModel> extends GroupView<T>{

        protected createElement() {
            this.element = $("<div>");
        }
        protected initializeElement() {
            this.element.attr("ui-linear-layout", "");
            this.element.attrchange((event) => {
                if (event.attributeName === "ui-layout-orientation") {
                    this.setValue("orientation");
                }
            });
            super.initializeElement();
        }

        @property
        public get orientation(): LinearLayout.LayoutOrientation {
            return this.element.attr("ui-layout-orientation");
        }
        public set orientation(val: LinearLayout.LayoutOrientation) {
            this.element.attr("ui-layout-orientation", val);
        }
    }

    export module LinearLayout {
        export enum LayoutOrientation {
            HORIZONTAL,
            VERTICAL
        }
    }
} 