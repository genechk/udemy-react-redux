import './ExpenseDate.css';

const formatDate = (date, options) => date.toLocaleString('en-US', options);

const ExpenseDate = ({ date }) => {
  const month = formatDate(date, { month: 'long' });
  const day = formatDate(date, { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export { ExpenseDate };
