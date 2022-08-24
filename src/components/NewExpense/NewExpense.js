import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const startEditingHandler = (event) => {
    event.preventDefault();
    setShowForm(true);
  };
  const stopEditingHandler = (event) => {
    event.preventDefault();
    setShowForm(false);
  };
  const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };
  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {showForm && (
        <ExpenseForm
          onCancelButton={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
