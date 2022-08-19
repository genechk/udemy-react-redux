import { useState } from 'react';
import { ExpenseDate } from './ExpenseDate/ExpenseDate';
import { Card } from '../../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = ({ amount, date, title: titleProp }) => {
  const [title, setTitle] = useState(titleProp);
  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export { ExpenseItem };
