export default class DataListApiModel<T> {
  data: Array<T>;
  rowsPerPage: number;
  totalPages: number;
  totalRows: number;

  constructor(data: Array<T>, rowsPerPage: number, totalRows: number) {
    this.data = data;
    this.totalRows = totalRows;
    this.rowsPerPage = rowsPerPage;
    this.totalPages = Math.ceil(totalRows / rowsPerPage);
  }
}
