import React, { useState } from "react";
import "../css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [FormHandler, setFormUpdate] = useState(false);

  const startEditing = () => {
    setFormUpdate(true);
  };

  const cancelEditing = () => {
    setFormUpdate(false);
  };

  const onSaveExDataHandler = (enteredonSaveExData) => {
    const expenseData = {
      ...enteredonSaveExData,
      id: Math.random().toString(),
    };

    props.onAddEx(expenseData);
    setFormUpdate(false); // Hiding Form
  };

  return (
    <div className="new-expense">
      {!FormHandler && <button onClick={startEditing}>Add new Expense</button>}
      {FormHandler && (
        <ExpenseForm
          onSaveExData={onSaveExDataHandler}
          onCancel={cancelEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
