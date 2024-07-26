import React from 'react';
const Pagination = ({ data, itemsPerPage, onPageChange }) => {
    const pageCount = Math.ceil(data.length / itemsPerPage);

    // Function to calculate page numbers
    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(i);
    }

    // Function to handle click on page number
    const handlePageClick = (pageNumber) => {
        onPageChange(pageNumber);
    };

    // Render the pagination controls
    return (
        <div className="pagination-container">
            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => handlePageClick(number - 1)}
                    className="page-item"
                >
                    {number}
                </button>
            ))}
        </div>
    );
};

export default Pagination;