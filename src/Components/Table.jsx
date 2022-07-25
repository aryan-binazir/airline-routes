import React from "react";

const Table = ({ data }) => {
  console.log(data)
  return (
    <table>
      <tbody>
        <tr>
            <th>Airline</th>
            <th>Source Airport</th>
            <th>Destination Airport</th>
        </tr>
        {data.routes.map((row, i) => (
          <tr key={i}>
              <td>{data.getAirlineById(row.airline)}</td>
              <td>{data.getAirportByCode(row.src)}</td>
              <td>{data.getAirportByCode(row.dest)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;