import React, { useState } from 'react';
import './App.css';
import data from './data.js';
import Table from './Components/Table';
import Select from './Components/Select';

const formatValue = (property, value) => {
  if (property === "airline") {
    return data.getAirlineById(value);
  } else {
    return data.getAirportByCode(value);
  }
};

const App = () => {
  function getAirlines() {
    let airlines = [];
    data.airlines.forEach(({ name, id }) => airlines.push({ name, id }));
    return airlines;
  };

  function filterAirlines(id) {
    if (id === 'all') {
      setRows(data.routes)
    } else {
      setPage(0)
      setRows(data.routes.filter(flight => String(flight.airline) === id));
    }
  };

  const [rows, setRows] = useState(data.routes);
  const [columns, setColumns] = useState([
    {name: 'Airline', property: 'airline'},
    {name: 'Source Airport', property: 'src'},
    {name: 'Destination Airport', property: 'dest'},
  ]);
  const [airlines, setAirlines] = useState(() => getAirlines());
  const [page, setPage] = useState(0);

return (
  <div className="app">
    <header className="header">
      <h1 className="title">Airline Routes</h1>
    </header>
    <main>
      <Select 
      airlines={airlines}
      filterAirlines={filterAirlines}
      />
      <Table className = "routes-table"
      rows={rows}
      columns={columns}
      format={formatValue}
      page={page}
      setPage={setPage}
      />
    </main>
  </div>
)}

export default App;