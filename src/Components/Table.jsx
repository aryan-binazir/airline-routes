import React, { useState } from 'react';

const Table = ({ rows, columns, className, format, page, setPage }) => {
  const perPage = 25;
  
  

  const start = page * perPage;
  const nextPage = (event) => {
    event.preventDefault();
    setPage(page + 1);
  };

  const previousPage = (event) => {
    event.preventDefault();
    setPage(page - 1);
  };

  const columnHeaders = columns.map((airport, i) => {
    return <th key={i}>{airport.name}</th>
  });

  const bodyRows = rows.slice(start, start + perPage).map((row) => {
    const rows = columns.map((col) => {
      const value = row[col.property];
      return <td key={col.property + value}>{format(col.property, value)}</td>;
    });
    return <tr key={Object.values(row).join(":")}>{rows}</tr>;
  });

  return (
    <>
      <table className={className}>
          <thead>
            <tr>{columnHeaders}</tr>
          </thead>
          <tbody>{bodyRows}</tbody>
      </table>
      <div className="pagination">
        <p>
          Showing {start + 1}-{start + bodyRows.length} of {rows.length} routes.
        </p>
        <p>
          <button key="previous" disabled={page === 0} onClick={previousPage}>
            Previous Page
          </button>
          <button
            key="next"
            disabled={start + perPage >= rows.length}
            onClick={nextPage}
          >
            Next Page
          </button>
        </p>
      </div>
    </>
  )
}

export default Table;