import React, { useState } from "react";
import ExpensesList from "./ExpenseList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart'
import "../css/Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const ExpenseChangeFilter = (selectYear) => {
    setFilteredYear(selectYear);
  };

  const filterOnYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={ExpenseChangeFilter}
        />
        <ExpensesChart expenses={filterOnYear} />
        <ExpensesList items={filterOnYear} />
      </Card>
    </div>
  );
};

export default Expenses;
