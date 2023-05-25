import React, { useState } from 'react';

import './ExpensesFilter.css';

const allowedYears = ['All','2023','2022','2021','2020','2019']


const ExpensesFilter = (props) => {
  const optionHandler = (event) => {
    let value = event.target.value;
    props.onYearChange(value)
  }
  
    return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value= {props.selectedYear} onChange={optionHandler}>
          {allowedYears.map((option, index) => 
          <option key={index} value={option}>{option}</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;