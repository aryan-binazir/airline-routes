import React from 'react';



const Select = ( { options, filterOptions, enabled }) => {
  const handleChange = (event) => {
    event.preventDefault();
    filterOptions(event.target.value);
  }

  return (
    <select name="airlines" id="airlineList" onChange={handleChange}>
      <p>Filter Airlines</p>
      <option key="all" value="all">All</option>
      {options.map(option => {
        let id = option.code || option.id;
        return <option key={option.name} value={id} disabled={!!enabled(id)}>{option.name}</option>
      })}
    </select>
  )
}

export default Select;