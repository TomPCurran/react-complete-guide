import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import React, { useState } from 'react';

const ExpenseItem = (props) => {
  //useState -> react hook, can't be called outside of function, need to be called inside component function
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('updated!');
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Button</button>
    </Card>
  );
};

export default ExpenseItem;
