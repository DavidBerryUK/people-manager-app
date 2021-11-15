export default class OptionModel {
    id: string | number;
    text: string;

    constructor(id: string | number, text: string) {
        this.id = id;
        this.text = text;
    }
}