import React, { useState } from 'react';



const Select = ( { airlines, filterAirlines }) => {
  const handleChange = (event) => {
    event.preventDefault();
    filterAirlines(event.target.value)
  }

  return (
    <select name="airlines" id="airlineList" onChange={handleChange}>
      <p>Filter Airlines</p>
      <option key="all" value="all">All</option>
      {airlines.map(airline => {
        return <option key={airline.name} value={airline.id}>{airline.name}</option>
      })}
    </select>
  )
}

export default Select;