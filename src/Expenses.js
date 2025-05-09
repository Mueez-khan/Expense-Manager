import React , {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Filter from "./components/Filter/ExpenseFilter";
import ExpenseChart from "./components/Chart/ExpenseChart";

function Expenses(props )  {

  const [filterYear , setFilterYear] = useState("2020");

  const filterExpenseYear = props.items.filter (expense =>{
    return expense.date.getFullYear().toString() === filterYear;
  })
  
  const changeHandler = (year) =>{
     
      setFilterYear(year);
    }

    return(
    <div className="expenses">
    <Filter onChangeYear={filterYear} onClickChange={changeHandler}></Filter>
      <ExpenseChart Expenses={filterExpenseYear}/>
    {filterExpenseYear.length === 0 ? (<h1 className="txt_color_white">No item found.</h1>) : filterExpenseYear.map((expense) => (
        <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        ></ExpenseItem>
      ))}

          {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        
      ></ExpenseItem>
       <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        
      ></ExpenseItem>
        <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        
      ></ExpenseItem>
        <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        
      ></ExpenseItem> */}
    </div>
    )

}

export default Expenses;