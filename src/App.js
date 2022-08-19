import { useState } from 'react';
import uuid from 'react-uuid';
import { Expenses } from './components/Expenses';
import { NewExpense } from './components/NewExpense/NewExpense';
import './App.css';

const allExpenses = [
  {
    id: uuid(),
    amount: 94.12,
    date: new Date(2022, 3, 28),
    title: 'Toilet Paper',
  },
  { id: uuid(), amount: 799.49, date: new Date(2022, 2, 12), title: 'New TV' },
  {
    id: uuid(),
    amount: 294.67,
    date: new Date(2022, 3, 28),
    title: 'Car Insurance',
  },
  {
    id: uuid(),
    amount: 450,
    date: new Date(2022, 3, 28),
    title: 'New Desk (Wooden)',
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(allExpenses);
  const onSaveExpenseData = expenseData => {
    setExpenses(prevExpenses => [
      {
        ...expenseData,
        id: uuid(),
      },
      ...prevExpenses,
    ]);
  };

  return (
    <div className="App">
      <NewExpense onSaveExpenseData={onSaveExpenseData} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
