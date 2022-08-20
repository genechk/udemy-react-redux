import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';
import { useState } from 'react';

const NewExpense = ({ onSaveExpenseData }) => {
  const [isAddExpenseFormDisplayed, setIsAddExpenseFormDisplayed] =
    useState(false);

  const showAddExpenseForm = () => setIsAddExpenseFormDisplayed(true);
  const hideAddExpenseForm = () => setIsAddExpenseFormDisplayed(false);

  if (!isAddExpenseFormDisplayed) {
    return (
      <div className="new-expense">
        <button onClick={showAddExpenseForm}>Add New Expense</button>;
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={onSaveExpenseData}
        hideForm={hideAddExpenseForm}
      />
    </div>
  );
};

export { NewExpense };
