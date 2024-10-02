import React, { useEffect } from 'react';
import { Chart, LinearScale, CategoryScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register necessary components from Chart.js
Chart.register(
  LinearScale,        // This is what the error is indicating is missing
  CategoryScale,      // Needed for the x-axis
  PointElement,       // For the points on the line chart
  LineElement,        // For rendering the line itself
  Title,
  Tooltip,
  Legend
);

const LineChartComponent = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sample Data',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChartComponent;
