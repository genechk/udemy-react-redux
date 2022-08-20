import './ChartBar.css';
const ChartBar = ({ value, maxValue, label }) => {
  const barFillStyle = { height: '0%' };

  if (maxValue > 0) {
    barFillStyle.height = Math.round((value / maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={barFillStyle}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export { ChartBar };
