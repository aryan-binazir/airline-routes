import React from "react";

const Table = ({ tableRows, className, columns }) => {
  return (
    <table className={className}>
      <tbody>
        <tr>
          {columns.map((airport, i) => <th key={i}>{airport.name}</th>)}
        </tr>
        {tableRows.routes.map((row, i) => (
          <tr key={i}>
              <td>{tableRows.getAirlineById(row.airline)}</td>
              <td>{tableRows.getAirportByCode(row.src)}</td>
              <td>{tableRows.getAirportByCode(row.dest)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;