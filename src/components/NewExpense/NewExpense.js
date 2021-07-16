import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showAddExpenseForm, setShowAddExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    toggleFormHandler();
  };

  const toggleFormHandler = () => {
    setShowAddExpenseForm((prevState) => !prevState);
  };

  let newExpenseComponent = (
    <div className="new-expense">
      <button type="button" onClick={toggleFormHandler}>
        Add New Expense
      </button>
    </div>
  );

  if (showAddExpenseForm) {
    newExpenseComponent = (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleFormHandler}
        />
      </div>
    );
  }

  return newExpenseComponent;
};

export default NewExpense;
