import React, { useState } from 'react';
import './css/AddCourse.css';

const AddCourse = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    // Close the modal if the user clicks on the overlay, not the modal content
    if (e.target.className.includes('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <img 
            className="course-image" 
            src="image6.jpeg" 
            alt="Course" 
          />
          <div className="input-fields-container">
            <input className="input-field" placeholder="Title*" />
            <input className="input-field" placeholder="Brief Description*" />
            <input className="input-field" placeholder="Detailed Description*" />
          </div>
        </div>


        <div className="rating-section">
          <h5>Rating and Testimonials</h5>
          <div className="ratings">
          <button className="rating-btn">Add Rating</button>
          <button className="testimonial-btn">Add Review</button>
          </div>
        </div>

        <div className="tags-section">
          <span>Tags</span>
          <div className="tags">
            <button className="tag-btn">Beginner</button>
            <button className="tag-btn">Popular</button>
            <button className="tag-btn">New</button>
            <button className="tag-btn">Free</button>
            <button className="tag-btn">Premium</button>
          </div>
        </div>

        <div className="category-section">
          <span>Category</span>
          <div className="categories">
            <button className="category-btn">Personal</button>
            <button className="category-btn">Business</button>
            <button className="category-btn">Cooking</button>
            <button className="category-btn">Tech</button>
          </div>
        </div>
        <div className="function">
          <span>Functionalities</span>
          <div className="function-section">
            <textarea className="function-input" id='function-name' placeholder="Function Name" />
            <textarea className="function-input" id='function-description' placeholder="Description" />
          </div>
            <button className='add' id='add-function'>Add+</button>
        </div>
          

        <div className="sales-section">
          <span>Sales</span>
          <div className='sales'>
          <button className="sales-btn">50% OFF</button>
          <button className="sales-btn">Limited Offer</button>
          <button className="sales-btn">New Pricing</button>
          </div>
        </div>

        <div className="modal-footer">
          <button className="delete-btn">Delete</button>
          <button className="hide-btn">Hide</button>
          <button className="save-btn">Save</button>
          <button className="price-btn">$129</button>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
