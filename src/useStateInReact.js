import React , {useState} from "react";

import "./useStateInReact.css";
function useSateInReact ()
{
    
    // const [count , setcount] = useState(1);
    const [count , setCount] = useState(0);
    const clickHandler = () =>
    {
        setCount(count + 1);
    }

    const clickHandlerminas = () =>
    {
        setCount(count - 1);
    }
    const clickHandlerzero = () =>
    {
        setCount(count - count );
    }
    return(
        <div className="container">
        <div className="sub_container">
        <h1>Counter </h1>
        <div className="count">
        <h1>{count}</h1>
        </div>
        <div className="button">
        <div className="countplus">
        <button onClick={clickHandler}>+</button>
        </div>
        <div className="countminas">
        <button onClick={clickHandlerminas}>-</button>
        <button onClick={clickHandlerzero}>0</button>
        </div>
        </div>
        </div>
        </div>
    )
}

export default useSateInReact;