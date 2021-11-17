import { EnumButtonType } from "./EnumButtonType";
import PaginationButton from "./PaginationButton";
import PaginationModel from "./PaginationModel";
import React, { useMemo } from "react";

interface IProperties {
  page: number;
  pageCount: number;
  onPageChanged: (page: number) => void;
}

// Component
// Displays a row of pagination buttons
//
const PaginationWidget: React.FC<IProperties> = (props) => {
  const [pageModel, setPageModel] = React.useState(new PaginationModel(props.page, props.pageCount));

  // Ony create pagination model once,regardless of how many screen refreshes,
  // unless the page and page count is updated
  useMemo(() => {
    setPageModel(new PaginationModel(props.page, props.pageCount));
  }, [props.page, props.pageCount]);

  function changePageClickHandler(page: number) {
    if (page < 1) {
      page = 1;
    }
    if (page > pageModel.pageCount) {
      page = pageModel.pageCount;
    }
    if (page !== pageModel.page) {
      props.onPageChanged(page);
    }
  }

  return (
    <div className="paginationContainer">
      <PaginationButton enabled={pageModel.enableFirstPageButton} pageNumber={1} onPageSelected={changePageClickHandler} type={EnumButtonType.First} />
      <PaginationButton enabled={pageModel.enableSkipPreviousPageButton} pageNumber={pageModel.page - 10} onPageSelected={changePageClickHandler} type={EnumButtonType.SkipPrevious} />
      <PaginationButton enabled={pageModel.enablePreviousPageButton} pageNumber={pageModel.page - 1} onPageSelected={changePageClickHandler} type={EnumButtonType.Previous} />
      {pageModel.pageNumbers.map((item: number) => (
        <PaginationButton key={`${item}`} selected={item === pageModel.page} pageNumber={item} onPageSelected={changePageClickHandler} type={EnumButtonType.Page} />
      ))}
      <PaginationButton enabled={pageModel.enableSkipNextPageButton} pageNumber={pageModel.page + 1} onPageSelected={changePageClickHandler} type={EnumButtonType.Next} />
      <PaginationButton enabled={pageModel.enableNextPageButton} pageNumber={pageModel.page + 10} onPageSelected={changePageClickHandler} type={EnumButtonType.SkipNext} />
      <PaginationButton enabled={pageModel.enableLastPageButton} pageNumber={pageModel.pageCount} onPageSelected={changePageClickHandler} type={EnumButtonType.Last} />
    </div>
  );
};

export default PaginationWidget;
