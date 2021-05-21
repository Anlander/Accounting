import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import '../css/Expenses.css'

const Expenses = (props) => {
  return (
    <Card className='expenses'>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        pay={props.items[0].pay}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        pay={props.items[1].pay}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        pay={props.items[2].pay}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        pay={props.items[3].pay}
      />
    </Card>
  )
}

export default Expenses
