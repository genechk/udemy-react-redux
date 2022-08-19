import { Expenses } from './components/Expenses';
import './App.css';

const expenses = [
  {
    id: 'e1',
    amount: 94.12,
    date: new Date(2022, 3, 28),
    title: 'Toilet Paper',
  },
  { id: 'e2', amount: 799.49, date: new Date(2022, 2, 12), title: 'New TV' },
  {
    id: 'e3',
    amount: 294.67,
    date: new Date(2022, 3, 28),
    title: 'Car Insurance',
  },
  {
    id: 'e4',
    amount: 450,
    date: new Date(2022, 3, 28),
    title: 'New Desk (Wooden)',
  },
];

const App = () => {
  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
