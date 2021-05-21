import React from "react";
import '../css/ExpenseDate.css'

const ExpenseDate = (props) => {
  const date = props.date.toLocaleString("sv-SE", { day: "2-digit" });
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("sv-SE", { month: "short" });
  return (
    <div className='expense-date'>
      <div>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__date'>{date}</div>
      </div>
    </div>
  );
}

export default ExpenseDate;
