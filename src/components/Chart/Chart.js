import { ChartBar } from './Chart Bar/ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  console.log(dataPoints);
  const maxValue = dataPoints.reduce(
    (acc, { value }) => (value > acc ? value : acc),
    0,
  );

  console.log(maxValue);

  return (
    <div className="chart">
      {dataPoints.map(dataPoint => (
        <ChartBar {...dataPoint} key={dataPoint.label} maxValue={maxValue} />
      ))}
    </div>
  );
};

export { Chart };
