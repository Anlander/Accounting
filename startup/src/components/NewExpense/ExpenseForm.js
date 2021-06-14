import React, { useState } from "react";
import "../css/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [TitleEnter, setEnterTitle] = useState("");
  const [TitleAmount, setAmountTitle] = useState("");
  const [TitleDate, setDateTitle] = useState("");

  // const [userInput, setUserInput] = useState({
  //   TitleEnter: "",
  //   TitleAmount: "",
  //   TitleDate: "",
  // });

  const titleChangeHanlder = (event) => {
    setEnterTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   TitleEnter:
    //   event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, TitleEnter: event.target.value };
    // });
  };

  const AmountChangeHandler = (event) => {
    setAmountTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, TitleAmount: event.target.value };
    // });
  };

  const DateChangeHandler = (event) => {
    setDateTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   TitleDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, TitleDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: TitleEnter,
      amount: +TitleAmount,
      date: new Date(TitleDate),
      pay: "pay",
    };

    props.onSaveExData(expenseData);
    setEnterTitle("");
    setAmountTitle("");
    setDateTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={TitleEnter} onChange={titleChangeHanlder} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={TitleAmount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={TitleDate}
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel} type="reset">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
