import React from 'react';
import './App.css';
import data from './data.js';
import Table from './Components/Table';

const columns = [
  {name: 'Airline', property: 'airline'},
  {name: 'Source Airport', property: 'src'},
  {name: 'Destination Airport', property: 'dest'},
];

const formatValue = (property, value) => {
  if (property === "airline") {
    return data.getAirlineById(value);
  } else {
    return data.getAirportByCode(value);
  }
};

const App = () => (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <main>
    <Table className = "routes-table" tableRows={data} columns={columns} format={formatValue}/>
  </main>
</div>
)

export default App;