import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Dashboard from './Dashboard';
import Courses from './Courses';
import Login from './Login';
import Internship from './Internship';
import Projects from './Project';
import Sidebar from './component/Sidebar';
import LoginSidebar from './component/LoginSidebar'; // Import LoginSidebar
import Preview from './component/Preview';
import Field from './component/Field';
import Response from './component/response';
import Tabs from './component/Tabs';

function App() {
  return (
    <div className="app-container" style={{ display: 'flex' }}>
      <SidebarSwitch />
      {/* Main content will render here based on the current route */}
      <div className="main-content" style={{ marginLeft: '230px', padding: '20px', width: '100%' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/internships" element={<Internship />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/internships/field" element={<Field />} />
          <Route path="/response" element={<Response />} />
          {/* <Route path="/help" element={<Help />} /> */}
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </div>
    </div>
  );
}

const SidebarSwitch = () => {
  const location = useLocation(); // Now it's inside the Router context
  const isLoginPage = location.pathname === "/";

  return isLoginPage ? <LoginSidebar /> : <Sidebar />;
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
export default AppWrapper;
