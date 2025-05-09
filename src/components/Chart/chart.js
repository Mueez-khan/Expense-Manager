import React from "react";
import "./chart.css";
import ChartBar from "./chartBar";

function Chart(props) {


    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxValue = Math.max(...dataPointValues);


    return(
        <div className="chart">
        {props.dataPoints.map((dataPoint)=>(
  

    <ChartBar
      key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaxValue}
            label={dataPoint.label} 

                
            />
        
        ))}
        </div>
    )


}

export default Chart;