import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from './ExpensesList'

function Expenses(props) {
  const changeFilterYear = (year) => {
    console.log(year);
    setFilterYear(year);
  };

  const [enteredFilterYear, setFilterYear] = useState("2020");
  const filteredExpenses = props.expenses.filter(
    (expense) => enteredFilterYear === expense.date.getFullYear().toString()
  );


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredFilterYear}
          onChangeFilterYear={changeFilterYear}
        />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
