import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    id: "Revenue",
    color: "hsl(240, 70%, 50%)",
    data: [
      { x: "Jan", y: 10000 },
      { x: "Feb", y: 15000 },
      { x: "Mar", y: 30000 },
      { x: "Apr", y: 45000 },
      { x: "May", y: 50000 },
      { x: "Jun", y: 70000 },
      { x: "Jul", y: 85000 },
      { x: "Aug", y: 90000 },
      { x: "Sep", y: 100000 },
    ]
  }
];

const LineChart = () => {
  return (
    <div style={{ height: "400px" }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisLeft={{
          legend: 'Revenue',
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        colors={{ scheme: 'nivo' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        tooltip={({ point }) => (
          <div>
            <strong>{point.data.y}</strong> on {point.data.x}
          </div>
        )}
      />
    </div>
  );
};

export default LineChart;
