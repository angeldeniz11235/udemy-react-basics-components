import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: "$200.32",
      date: new Date(12, 11, 2019),
    },
    {
      id: "e2",
      title: "Rent",
      amount: "$500.00",
      date: new Date(12, 12, 2019),
    },
    {
      id: "e3",
      title: "Credit Card",
      amount: "$100.00",
      date: new Date(12, 13, 2019),
    },
    {
      id: "e4",
      title: "Utilities",
      amount: "$50.00",
      date: new Date(12, 14, 2019),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
