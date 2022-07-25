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

  function getAirports() {
    let airports = [];
    data.airports.forEach(({ name, code }) => airports.push({ name, code }));
    return airports;
  };

  function filterAirlines(id) {
    if (id === 'all') {
      setRows(data.routes)
    } else {
      setPage(0)
      setRows(data.routes.filter(flight => String(flight.airline) === id));
    }
  };

  function filterAirports(code) {
    if (code === 'all') {
      setRows(data.routes)
    } else {
      setPage(0);
      setRows(data.routes.filter(flight => {
        return ((flight.src === code) || (flight.dest === code));
      }));
    }
  }

  function handleClear () {
    setRows(data.routes);
  }

  function airlineEnabled(id) {
    for (let index = 0; index < rows.length; index += 1) {
      if (rows[index].airline === id) {
        return false;
      }
    }
    return true;
  }

  function airportEnabled(id) {
    for (let index = 0; index < rows.length; index += 1) {
      if (rows[index].src === id || rows[index].dest === id) {
        return false;
      }
    }
    return true;
  }

  const columns = [
    {name: 'Airline', property: 'airline'},
    {name: 'Source Airport', property: 'src'},
    {name: 'Destination Airport', property: 'dest'},
  ];

  const [rows, setRows] = useState(data.routes);
 
  const airlines = getAirlines();
  const airports = getAirports();
  const [page, setPage] = useState(0);

return (
  <div className="app">
    <header className="header">
      <h1 className="title">Airline Routes</h1>
    </header>
    <main>
      <Select 
      options={airlines}
      filterOptions={filterAirlines}
      enabled={airlineEnabled}
      />
      <Select 
      options={airports}
      filterOptions={filterAirports}
      enabled={airportEnabled}
      />
      <button onClick={handleClear}>Clear</button>
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