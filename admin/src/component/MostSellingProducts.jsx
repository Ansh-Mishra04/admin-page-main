import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './css/MostSellingProducts.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MostSellingProducts = () => {
  const products = [
    {
      rank: '#1',
      name: 'Task Forge',
      price: '$24.67',
      quantity: '298798',
      type: 'Project',
    },
    {
      rank: '#2',
      name: 'Java Core: Expert',
      price: '$24.67',
      quantity: '12,334',
      type: 'Training Program',
    },
    {
      rank: '#3',
      name: 'CodeMaster',
      price: '$24.67',
      quantity: '9,899',
      type: 'Project',
    },
  ];

  const [showFilter, setShowFilter] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [price, setPrice] = useState(213);
  const [qty, setQty] = useState(55000);
  const [selectedType, setSelectedType] = useState("Project");
  
  const filterButtonRef = useRef(null);  // Ref for the filter button
  const filterPopupRef = useRef(null);   // Ref for the filter popup

  // Toggle filter popup visibility
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleTypeSelection = (type) => {
    setSelectedType(type);
  };

  // Close popup when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterPopupRef.current &&
        !filterPopupRef.current.contains(event.target) &&
        !filterButtonRef.current.contains(event.target)
      ) {
        setShowFilter(false);
      }
    };

    if (showFilter) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilter]);

  // Adjust the popup's position relative to the filter button
  useEffect(() => {
    if (showFilter) {
      const buttonRect = filterButtonRef.current.getBoundingClientRect();
      const popup = filterPopupRef.current;

      // Calculate position to show popup above or below
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;

      if (spaceBelow > popup.offsetHeight) {
        popup.style.top = `${buttonRect.bottom + window.scrollY}px`; // Position below
      } else {
        popup.style.top = `${buttonRect.top - popup.offsetHeight + window.scrollY}px`; // Position above
      }

      popup.style.left = `${buttonRect.left}px`; // Align popup to filter button
    }
  }, [showFilter]);

  return (
    <div className="most-selling-products">
      <div className="header">
        <h2>Most Selling Products</h2>
        <div className="right-header">
          <div className="filter-icon" ref={filterButtonRef} onClick={toggleFilter}>
            <FontAwesomeIcon icon={faFilter} />
          </div>
          <div className="date-range">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd MMM, yyyy"
              className="date-range"
            />
          </div>
        </div>
      </div>

      {/* Filter Popup */}
      {showFilter && (
        <div className="filter-popup" ref={filterPopupRef}>
          <div className="filter-header">
            <h4>Filters</h4>
            <button onClick={toggleFilter} className="close-filter">
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
          </div>
          <div className="filter-item">
            <label>Price: ${price}</label>
            <input
              type="range"
              min="0"
              max="1000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="filter-item">
            <label>Qty: {qty}</label>
            <input
              type="range"
              min="0"
              max="100000"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </div>
          <div className="filter-item">
            <label>Type</label>
            <div className="filter-type-buttons">
              <button
                className={`filter-type-button ${selectedType === 'Project' ? 'active' : ''}`}
                onClick={() => handleTypeSelection('Project')}
              >
                Project
              </button>
              <button
                className={`filter-type-button ${selectedType === 'Training Program' ? 'active' : ''}`}
                onClick={() => handleTypeSelection('Training Program')}
              >
                Training Program
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Table */}
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Qty.</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.rank}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button className={`type-button ${product.type.replace(' ', '-').toLowerCase()}`}>
                  {product.type}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MostSellingProducts;
