import { Chart } from '../../Chart/Chart';

/** Generates array of month shorthand names */
const monthFormat = new Intl.DateTimeFormat('en-GB', { month: 'short' }).format;
const initialDataPoints = [...Array(12).keys()].map(key => ({
  value: 0,
  label: monthFormat(new Date(Date.UTC(2022, key % 12))),
}));

const ExpenseChart = ({ expenses }) => {
  const dataPoints = expenses.reduce((acc, { date, amount }) => {
    const index = date.getMonth();
    const current = acc[index];
    acc[index] = {
      ...current,
      value: current.value + Number(amount),
    };

    return acc;
  }, initialDataPoints);

  return <Chart dataPoints={dataPoints} />;
};

export { ExpenseChart };
