import React, {useState} from 'react'
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from './ExpenseFilter';

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYaer] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYaer(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler} 
      />
      {props.items.map(expense => 
        <ExpenseItem
          key={expense.id}
          title={expense.title} 
          amount={expense.amount}
          date={expense.date}
        />
      )}
    </Card>
  );
}

export default Expenses;