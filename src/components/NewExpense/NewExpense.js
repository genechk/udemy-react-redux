import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';
import { useState } from 'react';

const NewExpense = ({ onSaveExpenseData }) => {
  const [isEditing, setIsEditing] = useState(false);

  const showAddExpenseForm = () => setIsEditing(true);
  const hideAddExpenseForm = () => setIsEditing(false);

  if (!isEditing) {
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
