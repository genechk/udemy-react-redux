import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData, hideForm }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = event => setTitle(event.target.value);
  const amountChangeHandler = event => setAmount(event.target.value);
  const dateChangeHandler = event => setDate(event.target.value);

  const submitHandler = event => {
    event.preventDefault();

    // Update data in `App.js`
    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date),
    };

    onSaveExpenseData(expenseData);

    // Clear the form
    setTitle('');
    setAmount('');
    setDate('');

    // Hide the form
    hideForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={dateChangeHandler}
            min="2020-01-01"
            max="2023-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={hideForm}>
          Cancel
        </button>
        ;<button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export { ExpenseForm };
