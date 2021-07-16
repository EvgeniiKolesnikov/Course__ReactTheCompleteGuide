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

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0 ) {
    expensesContent = filteredExpenses.map(expense => 
      <ExpenseItem
        key={expense.id}
        title={expense.title} 
        amount={expense.amount}
        date={expense.date}
      />
    )
  }

  return (
    <Card className="expenses">
      <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler} 
      />
      {expensesContent}
    </Card>
  );
}

export default Expenses;