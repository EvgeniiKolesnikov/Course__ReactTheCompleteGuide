import React, {useState} from 'react'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

import "./Expenses.css";


const Expenses = (props) => {
  const [filteredYear, setFilteredYaer] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYaer(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });



  return (
    <Card className="expenses">
      <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler} 
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;