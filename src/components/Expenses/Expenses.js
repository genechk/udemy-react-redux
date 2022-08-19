import { useState } from 'react';

import { ExpenseItem } from './ExpenseItem/ExpenseItem';
import { ExpensesFilter } from './ExpensesFilter/ExpensesFilter';
import { Card } from '../UI/Card';
import './Expenses.css';

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState('2022');

  return (
    <Card className="expenses">
      <ExpensesFilter
        filterByYear={setSelectedYear}
        selectedYear={selectedYear}
      />
      {expenses.map(expense => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </Card>
  );
};

export { Expenses };
