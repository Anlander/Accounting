import React, { useState } from "react";
import "../css/ExpenseItem.css";
import Card from "../UI/Card";
import ExpanseDate from "./ExpenseDate.js";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  const [pay, setPaid] = useState(props.pay);

  const changeTitle = () => {
    setTitle('Paid');
    setAmount('0')
    setPaid('Undo')
    console.log(title)
  };

  return (
    <Card className="expense-item">
      <ExpanseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount} SEK</div>
      </div>
      <button onClick={changeTitle}>{pay}</button>
    </Card>
  );
};

export default ExpenseItem;
