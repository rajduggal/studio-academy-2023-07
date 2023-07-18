const Paginator = ({ pageSize, pageNumber, sortDirection, pageChange }) => {
  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="paginator">
      {pageNumbers.map((page) => (
        <span
          key={page}
          onClick={() => {
            pageChange(page);
          }}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Paginator;
