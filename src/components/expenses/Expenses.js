import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const filterOptionChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear)
  };


  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  })

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onFilterOptionChange={filterOptionChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses}/>
      {
        filteredExpenses.length === 0 ? (
          <p className="expenses-list__fallback">No expenses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )
      }
    </Card>
  );
};

export default Expenses;
