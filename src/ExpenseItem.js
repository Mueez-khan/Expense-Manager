import React from "react";
import "./ExpenseItem.css";
import "./ExpenseDate.css";
function ExpenseItem(props) {
  
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return (
    <div>
    <div className="expense-item">
    <div className="expense-date">
    <div className="expense-date__year">{props.date.getFullYear()}</div>
      <div className="expense-date__month">{month[props.date.getMonth()]}</div>
      <div className="expense-date__day">{props.date.getDate()}</div>
    </div>
      <div className="expense-item__description">{props.title}</div>
      <div className="expense-item__price">$ {props.amount}</div>
      
    </div>
    
    </div>
  );
}

export default ExpenseItem;
