import { useState } from 'react';

import { ExpensesList } from './ExpensesList/ExpensesList';
import { ExpensesFilter } from './ExpensesFilter/ExpensesFilter';
import { Card } from '../UI/Card';
import './Expenses.css';

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState('2022');
  const filteredExpenses = expenses.filter(
    ({ date }) => date.getFullYear().toString() === selectedYear,
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        filterByYear={setSelectedYear}
        selectedYear={selectedYear}
      />
      <ExpensesList expenses={filteredExpenses} selectedYear={selectedYear} />
    </Card>
  );
};

export { Expenses };
