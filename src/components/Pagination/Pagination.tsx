import React from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import "./style.css";

interface Props {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  pages: number;
  currentPage: number;
}

const Pagination: React.FC<Props> = ({ setPageNumber, pages, currentPage }) => {
  const navigate = useNavigate();
  const pageChange = (data: any) => {
    const correctPage = data.selected + 1;
    setPageNumber(correctPage);
    navigate(`/character/page=${correctPage}`);
  };
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
        onPageChange={(data) => pageChange(data)}
        forcePage={currentPage - 1}
      />
    </>
  );
};

export default Pagination;
