const Pagination = (props) => {
  const { currentPage, maxPageLimit, minPageLimit } = props;
  const totalPages = Math.round(props.response.total / props.response.limit); 
  const pages = [];
  Array.from({ length: totalPages }, (e, i) => pages.push(i)); 
  const handlePrevClick = () => props.onPrevClick();
  const handleNextClick = () => props.onNextClick(); 
  const handlePageClick = (e) => props.onPageChange(Number(e.target.dataset.id));

  const pageNumbers = pages.map((page) => {
    if (page <= maxPageLimit && page >= minPageLimit) {
      return (
        <li
          key={page}
          id={page}
          onClick={handlePageClick}
          className={`page-item ${currentPage === page ? "active" : null}`}
        >
          <div className="page-link" data-id={page}>
            {page + 1}
          </div>
        </li>
      );
    } else {
      return null;
    }
  });

  let pageIncrementEllipses = null;
  if (pages.length > maxPageLimit) {
    pageIncrementEllipses = <li onClick={handleNextClick}>&hellip;</li>;
  }
  let pageDecremenEllipses = null;
  if (minPageLimit >= 1) {
    pageDecremenEllipses = <li onClick={handlePrevClick}>&hellip;</li>;
  }
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination mb-2">
          <li className="page-item">
            <button
              onClick={handlePrevClick}
              disabled={currentPage === pages[0]}
              className={`page-link ${currentPage === pages[0] && "disabled"}`}
            >
              Prev
            </button>
          </li>
          {pageDecremenEllipses}
          {pageNumbers}
          {pageIncrementEllipses}
          <li className="page-item">
            <button
              onClick={handleNextClick}
              disabled={currentPage === pages[pages.length - 1]}
              className={`page-link ${
                currentPage === pages[pages.length - 1] && "disabled"
              }`}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
