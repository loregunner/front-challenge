import { Dispatch } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import "./Pagination.css";

interface IPagination {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  setCurrentPage: Dispatch<number>;
  paginate: (value: number) => void;
}

const Pagination: React.FC<IPagination> = ({
  postsPerPage,
  totalPosts,
  paginate,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers: number[] = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    if (totalPages <= 6) {
      return pageNumbers.map((number) => (
        <button
          className={`button_paginate ${
            currentPage === number ? "active" : ""
          }`}
          key={number}
          onClick={() => paginate(number)}>
          {number}
        </button>
      ));
    } else {
      return (
        <>
          {pageNumbers.slice(0, 4).map((number) => (
            <button
              className={`button_paginate ${
                currentPage === number ? "active" : ""
              }`}
              key={number}
              onClick={() => paginate(number)}>
              {number}
            </button>
          ))}
          {currentPage > 4 && currentPage < totalPages - 1 && (
            <button
              className="button_paginate active"
              onClick={() => paginate(currentPage)}>
              {currentPage}
            </button>
          )}
          {currentPage < totalPages - 1 && (
            <span style={{ color: "#888" }}>...</span>
          )}
          <button
            className={`button_paginate ${
              currentPage === totalPages ? "active" : ""
            }`}
            onClick={() => paginate(totalPages)}>
            {totalPages}
          </button>
        </>
      );
    }
  };

  return (
    <div className="wrapper">
      <div className="pagination_container">
        <div className="pagination_left">
          <i onClick={previousPage} className="icon">
            <MdArrowBackIosNew />
          </i>
        </div>
        <div className="page_container_number">{renderPageNumbers()}</div>
        <div className="pagination_rigth">
          <i onClick={nextPage} className="icon">
            <MdArrowForwardIos />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
