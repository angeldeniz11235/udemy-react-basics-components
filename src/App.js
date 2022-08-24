import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: "$200.32",
    date: new Date(2019, 3, 11),
  },
  {
    id: "e2",
    title: "Rent",
    amount: "$500.00",
    date: new Date(2019, 1, 12),
  },
  {
    id: "e3",
    title: "Credit Card",
    amount: "$100.00",
    date: new Date(2020, 1, 18),
  },
  {
    id: "e4",
    title: "Utilities",
    amount: "$50.00",
    date: new Date(2021, 3, 20),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
