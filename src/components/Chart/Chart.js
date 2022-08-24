import CharBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  <div className="chart">
    {props.dataPoints.map((dataPoint) => (
      <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValur={null}
        label={dataPoint.label}
      />
    ))}
  </div>;
};

export default Chart;
