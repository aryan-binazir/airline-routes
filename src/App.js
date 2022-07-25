import React from 'react';
import './App.css';
import data from './data.js';
import Table from './Components/Table';

const App = () => (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <main>
    <Table data={data} />
  </main>
</div>
)

export default App;