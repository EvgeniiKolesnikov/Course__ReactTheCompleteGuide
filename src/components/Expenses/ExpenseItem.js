import React, { useState } from 'react'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // функция setTitle меняет динамически значение переменной title
  // и заново запускает jsx код
  const [title, setTitle] = useState(props.title);
  // let title = props.title;

  const clickHandler = () => {
    // title = 'Updated';
    setTitle('Updated');         
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
