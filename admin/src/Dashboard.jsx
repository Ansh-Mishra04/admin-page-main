import React from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import './component/css/Dashboard.css';

// Import chart.js for advanced configuration
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const Dashboard = () => {

  // Sample Data for Line Chart (Total Revenue)
  const lineData = {
    labels: ['1', '5', '10', '15', '20', '25', '30'],
    datasets: [
      {
        label: 'Revenue',
        data: [5000, 10000, 15000, 25000, 35000, 45000, 55000],
        borderColor: '#22b573',
        borderWidth: 2,
        fill: false,
        tension: 0.3,
      }
    ]
  };

  // Doughnut Chart Data for User Devices
  const doughnutData = {
    labels: ['Mobile', 'Desktop', 'Tablet'],
    datasets: [
      {
        label: 'Users Device',
        data: [45, 35, 20],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
        hoverOffset: 4,
      }
    ]
  };

  // Bar Chart Data for States
  const barData = {
    labels: ['Punjab', 'Gujarat', 'Maharashtra', 'Goa', 'Madhya Pradesh'],
    datasets: [
      {
        label: 'Products Sold',
        data: [2400, 3800, 3000, 1700, 2000],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#FF9F40'],
        borderWidth: 1,
      }
    ]
  };

  return (
    <div className="dashboard-container">
      {/* Overview Cards Section */}
      <div className="overview-section">
        <div className="overview-card">
          <h4>Total Revenue</h4>
          <p>$7,216,459.98</p>
          <small>↑ 35% from June</small>
        </div>
        <div className="overview-card">
          <h4>Training Programs</h4>
          <p>$5,198,870.87</p>
          <small>↑ 15% from April</small>
        </div>
        <div className="overview-card">
          <h4>Most Selling Products</h4>
          <p>$1,087,760.06</p>
          <small>↑ 25% from May</small>
        </div>
      </div>

      {/* Line Chart Section - Total Revenue */}
      <div className="line-chart">
        <h4>Total Revenue Growth</h4>
        <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      {/* Most Selling Products Section */}
      <div className="most-selling-section">
        <h4>Most Selling Products</h4>
        <table className="selling-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1</td>
              <td>Task Forge</td>
              <td>$24.67</td>
              <td>289788</td>
              <td>Project</td>
            </tr>
            <tr>
              <td>#2</td>
              <td>Java Core: Expert</td>
              <td>$24.67</td>
              <td>19889</td>
              <td>Training Program</td>
            </tr>
            <tr>
              <td>#3</td>
              <td>CodeMaster</td>
              <td>$24.67</td>
              <td>12567</td>
              <td>Project</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bar Chart Section - Products by State */}
      <div className="bar-chart">
        <h4>Products Sold by State</h4>
        <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      {/* Website Analytics Section */}
      <div className="analytics-section">
        <div className="analytics-card">
          <h4>Page Views</h4>
          <p>961k</p>
        </div>
        <div className="analytics-card">
          <h4>Impressions</h4>
          <p>477k</p>
        </div>
        <div className="analytics-card">
          <h4>Visit Duration</h4>
          <p>12min</p>
        </div>
        <div className="analytics-card">
          <h4>Agent Visitors</h4>
          <p>477k</p>
        </div>
      </div>

      {/* Doughnut Chart Section - Users Device */}
      <div className="doughnut-chart">
        <h4>Users Device</h4>
        <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      {/* Users Section */}
      <div className="users-section">
        <div className="user-card">
          <h4>Active Users</h4>
          <p>4,568</p>
        </div>
        <div className="user-card">
          <h4>Total Devices</h4>
          <p>27,917</p>
        </div>
        <div className="user-card">
          <h4>Active Sessions</h4>
          <p>88k</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
