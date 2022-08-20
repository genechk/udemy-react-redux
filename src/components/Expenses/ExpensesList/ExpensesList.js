import { ExpenseItem } from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ expenses }) => {
  const isEmpty = !expenses.length;

  if (isEmpty) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map(expense => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </ul>
  );
};

export { ExpensesList };
