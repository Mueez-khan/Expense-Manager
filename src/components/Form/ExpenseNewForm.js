import React , {useState} from "react";
import "./ExpenseNewForm.css";

function ExpenseNewForm(props) {
  const [title , setTitle] = useState("");
  const [amount , setAmount] = useState("");
  const [date , setDate] = useState("");
  const titleChangeHandler = (event) =>{
    setTitle(event.target.value);
  }
  const amountChangeHandler = (event) =>{
    setAmount(event.target.value);
  }
  const dateChangeHandler = (event) =>{
    setDate(event.target.value);
  }

  const submitHandler = (event) =>
  {
    event.preventDefault();

    const expenseData ={
      title: title, 
      amount : +amount,
      date : new Date(date) 
    }
    // console.log(expenseData);
    props.onSaveDataHandler(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.1" step="0.01" value={amount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={date} onChange={dateChangeHandler} />
        </div>

        <div className="new-expense__actions">
          <button type="submit"  onClick={props.onCancelHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseNewForm;
