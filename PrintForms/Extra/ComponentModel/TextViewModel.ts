module Base.ComponentModel {
    export class TextViewModel extends BaseViewModel {
        private _text: string;

        public get text(): string {
            return this._text;
        }

        public set text(text: string) {
            alert("ViewModel: text changed to '" + text + "'");
            this._text = text;
            this.onPropertyChanged("text", text);
        }
    }
} 