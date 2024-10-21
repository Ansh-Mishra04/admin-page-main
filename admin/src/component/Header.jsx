import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import './css/Header.css'; // Adjust the path as necessary

function Header({ title }) {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <div className="bell-container">
      <FontAwesomeIcon icon={faBell} className="header-bell" />
      </div>
    </header>
  );
}

export default Header;
