import React from "react";

import "./chartBar.css";

function ChartBar(props) {

    let barHight = 0;

    if(props.maxValue > 0 )
    {
        barHight = Math.round((props.value / props.maxValue ) * 100) + '%';
    }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barHight}}>
    

        </div>
      </div>
      <div className="chart-bar__label">

    {props.label}

      </div>
    </div>
  );
}


export default ChartBar;