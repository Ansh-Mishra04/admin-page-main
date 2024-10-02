import React from 'react';
import './css/Modal.css'; // Ensure you have this CSS file

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Function to close the modal when clicking outside of the modal content
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>

        {/* Header with course image and details */}
        <div className="modal-header">
          <img src="/image6.jpeg" alt="Course" />
          <div className="modal-header-details">
            <input type="text" placeholder="Title*" />
            <input type="text" placeholder="Brief Description*" />
            <input type="text" placeholder="Detailed Description*" />
          </div>
        </div>

        {/* Ratings and Testimonials */}
        <h3>Rating And Testimonials</h3>
        <div className="ratings">
          <button>Add New+</button>
          <button>User Nostiliga</button>
          <button>User Ankit</button>
          <button>User Shivam</button>
        </div>

        {/* Tags */}
        <h3>Tags</h3>
        <div className="tags">
          <button>Beginner</button>
          <button>Java</button>
          <button>Tech Skill</button>
          <button>Add+</button>
        </div>

        {/* Category */}
        <h3>Category</h3>
        <div className="category">
          <button>Frontend</button>
          <button>Backend</button>
          <button>Designing</button>
          <button>Add+</button>
        </div>

        {/* Modules */}
        <h3>Modules</h3>
        <div className="modules">
          <input type="text" placeholder="Module Name" />
          <textarea placeholder="Description"></textarea>
        </div>
        <button>Add+</button>

        {/* Sales */}
        <h3>Sales</h3>
        <p>10% from June</p>
        <div className="sales-metrics">
          <p>7% Total Sold</p>
          <p>$22,000 Total Revenue</p>
          <p>20% Commission</p>
          <p>$4,000 Profit</p>
        </div>

        {/* Action buttons */}
        <div className="modal-actions">
          <button className="delete-btn">Delete</button>
          <button className="save-btn">Save</button>
          <button className="price-btn">$129</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
