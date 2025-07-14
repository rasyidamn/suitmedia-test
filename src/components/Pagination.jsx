import React from "react";

function Pagination({ totalPost, postPerPage, setCurrentPage, currentPage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="mx-32 mb-10 flex items-center justify-center">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`px-2 rounded-md cursor-pointer ${
              page == currentPage ? "bg-orange text-slate-100" : ""
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
