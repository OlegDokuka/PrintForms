///<reference path="../../Base/View/View"/>
module PF.View {
    import property = Annotation.property;
    @test
    export class TextView extends View<ComponentModel.TextViewModel>{
        protected createElement() {
            this.element = $("<input>");
        }
        protected initializeElement() {
            this.element.change(this.setValue.bind(this, "text"));

            super.initializeElement();
        }

        @property
        public get text(): string {
            return this.element.val();
        }
        public set text(text: string) {
            this.element.val(text);
        }
    }
    function test() {

    }
}