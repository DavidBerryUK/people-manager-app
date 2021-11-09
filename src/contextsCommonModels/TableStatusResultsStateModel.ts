export default class TableStatsResultsStateModel {
    totalPages: number;
    totalRows: number;

    constructor() {
        this.totalPages = 0;
        this.totalRows = 0;
    }

    // clone object, required as when updating context, 
    //  a new model is needed.
    clone(): TableStatsResultsStateModel {
        const model = new TableStatsResultsStateModel();
        model.totalPages = this.totalPages;
        model.totalRows = this.totalRows;
        return model;
    }

    // determine if all values are equal
    //
    isEqualTo(model: TableStatsResultsStateModel): boolean {
        if (
            this.totalPages !== model.totalPages ||
            this.totalRows !== model.totalRows) {
            return false
        }
        return true;
    }
}