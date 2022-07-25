import React from "react";

const Table = ({ data }) => {

  return (
      <tbody>
        <tr>
            <th>Airline</th>
            <th>Source Airport</th>
            <th>Destination Airport</th>
        </tr>
        {data.routes.map((row, i) => (
            <tr key={i}>
                <td>{row.airline}</td>
                <td>{row.src}</td>
                <td>{row.dest}</td>
            </tr>
        ))}
    </tbody>
  )
}

export default Table;