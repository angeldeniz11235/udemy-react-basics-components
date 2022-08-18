import ExpenseItem from "./components/ExpenseItem";
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
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
