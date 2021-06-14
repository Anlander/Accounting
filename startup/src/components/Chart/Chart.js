import React from "react";
import "../css/Chart.css";
import ChartBar from "./ChartBar";

const Chart = props => {
    const valueData = props.dataPoints.map(dataPoints => dataPoints.value);
    const totalMax = Math.max(...valueData);
    console.log(props.dataPoints);
    

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={totalMax}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};

export default Chart;
