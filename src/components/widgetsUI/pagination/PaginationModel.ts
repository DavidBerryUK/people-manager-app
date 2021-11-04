export default class PaginationModel {
  page: number;
  pageCount: number;
  pageNumbers: Array<number>;
  enableFirstPageButton: boolean;
  enableSkipPreviousPageButton: boolean;
  enablePreviousPageButton: boolean;
  enableLastPageButton: boolean;
  enableNextPageButton: boolean;
  enableSkipNextPageButton: boolean;

  private numbersToShowEachSideOfCurrentPage: number = 4;
  private firstPage: number = 0;
  private lastPage: number = 0;

  constructor(page: number, pageCount: number) {
    this.page = page;
    this.pageCount = pageCount;
    this.calculateFirstPage();
    this.calculateLastPage();
    this.adjustPageRange();
    this.pageNumbers = this.createPageNumbers();
    this.enableFirstPageButton = this.page > 1;
    this.enableSkipPreviousPageButton = this.page > 1;
    this.enablePreviousPageButton = this.page > 1;
    this.enableLastPageButton = this.page < this.pageCount;
    this.enableNextPageButton = this.page < this.pageCount;
    this.enableSkipNextPageButton = this.page < this.pageCount;
  }

  private calculateFirstPage() {
    this.firstPage = this.page - this.numbersToShowEachSideOfCurrentPage;
    if (this.firstPage < 1) {
      this.firstPage = 1;
    }
  }

  private calculateLastPage() {
    this.lastPage = this.firstPage + this.numbersToShowEachSideOfCurrentPage * 2;
    if (this.lastPage > this.pageCount) {
      this.lastPage = this.pageCount;
    }

    return this.lastPage;
  }

  private adjustPageRange() {
    const range = this.lastPage - this.firstPage;
    if (range < this.numbersToShowEachSideOfCurrentPage * 2) {
      this.firstPage = this.lastPage - this.numbersToShowEachSideOfCurrentPage * 2;
      if (this.firstPage < 1) {
        this.firstPage = 1;
      }
    }
  }

  private createPageNumbers(): Array<number> {
    const pageArray = [];
    for (let i = this.firstPage; i <= this.lastPage; i++) {
      pageArray.push(i);
    }

    return pageArray;
  }
}
