import React from "react";
import ReactPaginate from "react-paginate";
import "./style.css";

interface Props {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  pageNumber: number;
  pages: number;
}

const Pagination: React.FC<Props> = ({ setPageNumber, pageNumber, pages }) => {
  return (
    <>
      <ReactPaginate
        className="pagination"
        pageCount={pages}
        nextLabel="next page"
        previousLabel="previous page"
        nextClassName="btn"
        previousClassName="btn"
        pageClassName="pageBtn"
        activeClassName="active"
        pageRangeDisplayed={10}
        marginPagesDisplayed={1}
        onPageChange={(data) => setPageNumber(data.selected + 1)}
      />
    </>
  );
};

export default Pagination;
