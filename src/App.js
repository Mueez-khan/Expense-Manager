import React , {useState} from "react";
import "./App.css";
import Expenses from "./Expenses";
import ExpenseForm from "./components/Form/ExpenseForm";
const expenseData = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date("2020, 7, 14"),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date("2021, 3, 12") },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date("2021, 2, 4"),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date("2021, 5, 12"),
  },
];
   



function User() {

  const [newExpense , setNewExpense] = useState(expenseData);
    const addExpenseData = (expense) =>{
      setNewExpense((oldExpense) =>{
        return [expense, ...oldExpense]
      })
    }
  return (

    

    <>
    <ExpenseForm onAddExpense={addExpenseData}></ExpenseForm>
 
   <Expenses items={newExpense}></Expenses>
   </>
  );
}

export default User;
