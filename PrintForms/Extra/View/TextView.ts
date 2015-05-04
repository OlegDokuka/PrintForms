///<reference path="../../Base/View/View"/>
module Base.View {
    export class TextView extends View<ComponentModel.TextViewModel>{

        protected registerProperties(propertyList: Array<String>): void {
            super.registerProperties(propertyList);
            propertyList.push("text");
        }
        protected createElement() {
            this.element = $("<input>");
        }
        protected initializeElement() {
            this.element.change(this.setValue.bind(this, "text"));

            super.initializeElement();
        }

        public get text(): string {
            return this.element.val();
        }
        public set text(text: string) {
            this.element.val(text);
        }
    }
}