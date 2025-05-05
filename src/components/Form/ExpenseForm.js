import React , {useState} from "react";
import "./ExpenseForm.css";
import ExpenseNewForm from "./ExpenseNewForm";
function ExpenseForm (props) {
    const [editing , setEditing] = useState(false);
    const saveDataHandler = (expenseData) =>
    {
        const saveExpenseData ={
            ...expenseData, 
            id: Math.random().toString()*100
        };
        // console.log(saveExpenseData);
        props.onAddExpense(saveExpenseData);
        setEditing(false);
    }
    //hiding and un hiding the Form
  
  const editingHandler = () =>{
    setEditing(true);
  }

  const cancelHandler = () =>{
    setEditing(false);
  }

    return(
        <div className="new-expense">
       
        {!editing && <button onClick={editingHandler}>Add Expense</button>}
        {editing && <ExpenseNewForm onSaveDataHandler={saveDataHandler} 
          onCancelHandler={cancelHandler} />}
       
        </div>
    )

} 

export default ExpenseForm;