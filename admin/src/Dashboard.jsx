import React from 'react'
import './component/css/Dashboard.css';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import LineChart from './component/LineChart'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faArrowUpRightDots, faLaptopCode, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import StateProgress from './component/StateProgress'
import MostSellingProducts from './component/MostSellingProducts';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveChoropleth } from '@nivo/geo';
// import worldCountries from './world_countries.json'; // For the geo chart

const Dashboard = () => {
  const data = [
    { name: 'Day 1', uv: 100 },
    { name: 'Day 2', uv: 300 },
    { name: 'Day 3', uv: 200 },
    { name: 'Day 4', uv: 400 },
    { name: 'Day 5', uv: 600 },
    { name: 'Day 6', uv: 500 },
    { name: 'Day 7', uv: 700 },
  ];
  const lineChartData = [
    {
      "id": "Visitors",
      "data": [
        { "x": "11 Apr", "y": 40000 },
        { "x": "12 Apr", "y": 45000 },
        { "x": "13 Apr", "y": 34000 },
        { "x": "14 Apr", "y": 60000 },
        { "x": "15 Apr", "y": 54000 },
        { "x": "16 Apr", "y": 70000 },
        { "x": "17 Apr", "y": 64000 },
        { "x": "18 Apr", "y": 57000 },
        { "x": "19 Apr", "y": 62000 },
        { "x": "20 Apr", "y": 49000 },
        { "x": "21 Apr", "y": 35000 },
        { "x": "22 Apr", "y": 34000 },
        { "x": "23 Apr", "y": 44000 }
      ]
    }
  ];
  
  const pieChartData = [
    { "id": "Desktop", "label": "Desktop", "value": 4568, "color": "hsl(205, 70%, 50%)" },
    { "id": "Tablet", "label": "Tablet", "value": 2695, "color": "hsl(120, 70%, 50%)" },
    { "id": "Mobile", "label": "Mobile", "value": 20654, "color": "hsl(40, 70%, 50%)" }
  ];

  const geoChartData = [
    { "id": "USA", "value": 4568 },
    { "id": "IND", "value": 3500 },
    { "id": "GBR", "value": 3000 },
    // More countries
  ];
  return (
    <div className="dashboard-container">
      <div className="overview">
        <div className="cards">
          <div className="card-data">
            <div className="overview-card">
            <FontAwesomeIcon icon={faChartSimple}/>
              <h4>Total Revenue</h4>
              <p>$7,216,459.98</p>
              <small><FontAwesomeIcon icon={faArrowUpRightDots} style={{color: "#00573d"}}/> 35% from June</small>
            </div>
            <div className="overview-card">
            <FontAwesomeIcon icon={faLaptopCode}/>
              <h4>Training Programs</h4>
              <p>$5,198,870.87</p>
              <small><FontAwesomeIcon icon={faArrowUpRightDots} style={{color: "#00573d"}}/> 15% from April</small>
            </div>
            <div className="overview-card">
            <FontAwesomeIcon icon={faPersonChalkboard}/>
              <h4>Most Selling Products</h4>
              <p>$1,087,760.06</p>
              <small><FontAwesomeIcon icon={faArrowUpRightDots} style={{color: "#00573d"}}/> 25% from May</small>
            </div>
          </div>
          <div className="card-line">
            <h4>Total Revenue Growth</h4>
            <LineChart />
          </div>
        </div>
        <div className="sales-data">
          <StateProgress/>
        </div>
      </div>
        <MostSellingProducts/>
      <div className="website-analytics">
      <div className="heading">
        <h2>Website Analytics</h2>
      </div>
        <div className="analysis-1">
          <div className="left">
          <div className="row-1">
          <div className="small-card">
              <div className="card-header">
                <i className="fas fa-user"></i>
                <span>Page Visitors</span>
              </div>
              <div className="card-body">
                <h3>961k</h3>
                <small><FontAwesomeIcon icon={faArrowUpRightDots} style={{color: "#00573d"}}/> 10% from June</small>
              </div>
          </div>
          <div className="small-card">
              <div className="card-header">
                <i className="fas fa-eye"></i>
                <span>Impressions</span>
              </div>
              <div className="card-body">
                <h3>477k</h3>
                <small><FontAwesomeIcon icon={faArrowUpRightDots} style={{color: "#00573d"}}/> 10% from June</small>
              </div>
          </div>
          </div>
          <div className="row-2">
              <div className="small-card">
              <div className="card-header">
                <i className="fas fa-eye"></i>
                <span>Page Views</span>
              </div>
              <div className="card-body">
                <h3>4,558k</h3>
                <small><FontAwesomeIcon icon={faArrowUpRightDots} style={{color: "#00573d"}}/> 10% from June</small>
              </div>
          </div>
          <div className="small-card">
              <div className="card-header">
                <i className="fas fa-clock"></i>
                <span>Visit Duration</span>
              </div>
              <div className="card-body">
                <h3>12 min</h3>
                <small><FontAwesomeIcon icon={faArrowUpRightDots} style={{color: "#00573d"}}/> 10% from June</small>
              </div>
          </div>
          </div>
          </div>
          <div className="right">
          <div className="large-card">
          <h3>April Visitors</h3>
          <ResponsiveLine
            data={lineChartData}
            margin={{ top: 20, right: 50, bottom: 50, left: 50 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Date',
              legendOffset: 36,
              legendPosition: 'middle'
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Visitors',
              legendOffset: -40,
              legendPosition: 'middle'
            }}
            colors={{ scheme: 'category10' }}
          />
          </div>
          </div>
        </div>
        <div className="analysis-2">
          <div className="social-card">
              <h5>Uses Device</h5>
              <ResponsivePie
                data={pieChartData}
                margin={{ top: 20, right: 40, bottom: 40, left: 40 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={{ scheme: 'paired' }}
              />
          </div>
          <div className="social-card">
            <h5>Social Search</h5>
            <div className="google">
                <div className="logos"><img src="/google.png" alt="" className='social_logo'/></div>
                <div className="social-title">
                  <h3>Google</h3>
                  <p>www.google.com</p>
                </div>
                <div className="social-percentage">50%</div>
            </div>
            <div className="yahoo">
                <div className="logos"><img src="/yahoo.png" alt="" className='social_logo'/></div>
                <div className="social-title">
                  <h3>Yahoo</h3>
                  <p>www.yahoo.com</p>
                </div>
                <div className="social-percentage">15%</div>
            </div>
            <div className="bing">
                <div className="logos"><img src="/bing.png" alt="" className='social_logo'/></div>
                <div className="social-title">
                  <h3>Bing</h3>
                  <p>www.bing.com</p>
                </div>
                <div className="social-percentage">10%</div>
            </div>
            <div className="duck-duck-go">
                <div className="logos"><img src="/duckduckgo.png" alt="" className='social_logo'/></div>
                <div className="social-title">
                  <h3>Duck Duck Go</h3>
                  <p>www.duckduckgo.com</p>
                </div>
                <div className="social-percentage">5%</div>
            </div>
            <div className="edge">
                <div className="logos"><img src="/edge.png" alt="" className='social_logo'/></div>
                <div className="social-title">
                  <h3>Google</h3>
                  <p>www.google.com</p>
                </div>
                <div className="social-percentage">20%</div>
            </div>
          </div>
          <div className="social-card">
            
          </div>
        </div>
        <div className="heading">
        <h2>Users</h2>
        </div>
        <div className="users">
          <div className="user-card"></div>
          <div className="user-card"></div>
          <div className="user-card"></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard