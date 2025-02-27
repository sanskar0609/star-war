import React from "react";

const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="flex justify-center mt-6">
      <button
        className="bg-gray-700 px-4 py-2 rounded text-white mr-2"
        disabled={page === 1}
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
      >
        Previous
      </button>
      <span className="text-white mx-4">Page {page} of {totalPages}</span>
      <button
        className="bg-gray-700 px-4 py-2 rounded text-white ml-2"
        disabled={page === totalPages}
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

