
import React from 'react'
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = e => {
    props.onChangeFilter(e.target.value);
  }

  return (
    <div className='expense-filter'>
      <div className='expenses-filter__control'>
        <label className='expenses-filter label'>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2010'>2010</option>
        </select>
      </div>
    </div>
  )
}


export default ExpenseFilter;