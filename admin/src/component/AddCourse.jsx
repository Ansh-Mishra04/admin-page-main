import React, { useState } from 'react';
import './css/AddCourse.css';


const AddCourse = ({ isOpen, onClose }) => {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isRatingPopupOpen, setIsRatingPopupOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); // State for uploaded file

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className.includes('modal-overlay')) {
      onClose();
    }
  };

  const handleOpenReview = () => {
    setIsReviewOpen(true);
  };

  const handleCloseReview = () => {
    setIsReviewOpen(false);
  };

  const handleOpenRatingPopup = () => {
    setIsRatingPopupOpen(true);
  };

  const handleCloseRatingPopup = () => {
    setIsRatingPopupOpen(false);
    setSelectedFile(null); // Reset file when closing
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file.name); // Set the file name for display
    }
  };

  const handleUploadClick = (event) => {
    event.stopPropagation(); // Prevent overlay click event
    document.getElementById('file-input').click(); // Trigger file input
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
            <button className="rating-btn add" onClick={handleOpenRatingPopup}>Add New</button>
            <button className="testimonial-btn" id='Ankit'>User Ankit</button>
            <button className="testimonial-btn " id='Shivam'>User Shivam</button>
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
          <div className="left-buttons">
            <button className="delete-btn">Delete</button>
            <button className="hide-btn">Hide</button>
            <button className="save-btn">Save</button>
          </div>
          <button className="price-btn right-button">$129</button>
        </div>

        {isReviewOpen && (
          <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-container2">
              <button className="close-btn" onClick={handleCloseReview}>×</button>
              <ReviewForm onClose={handleCloseReview} />
            </div>
          </div>
        )}

        {/* New Rating and Testimonials Popup */}
        {isRatingPopupOpen && (
          <div className="modal-overlay" onClick={handleCloseRatingPopup}>
            <div className="rating-popup" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={handleCloseRatingPopup}>×</button>
              <h3>Add Rating And Testimonials</h3>
              <input type="text" placeholder="User's Full Name" className="input-field" />
              <textarea placeholder="Feedback Or Review" className="input-field" />

              <div>
                <span>Select mode of Media:</span>
                <div>
                  <label>
                    <input type="radio" name="media" value="video" /> Video
                  </label>
                  <label>
                    <input type="radio" name="media" value="image" /> Image
                  </label>
                </div>
              </div>

              <div className="upload-area">
                <p>Drag or Upload from computer</p>
                <button className="upload-btn" onClick={handleUploadClick}>Upload</button>
                <input 
                  type="file" 
                  id="file-input" 
                  style={{ display: 'none' }} 
                  onChange={handleFileChange} 
                />
                {selectedFile && <p>Selected File: {selectedFile}</p>} {/* Display file name */}
              </div>

              <input type="text" placeholder="YouTube embed link" className="input-field" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCourse;
