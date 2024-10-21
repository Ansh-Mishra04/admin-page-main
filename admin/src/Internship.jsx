import React from 'react';
import { useNavigate } from 'react-router-dom';
import './component/css/Internship.css'; // Assuming you'll create a separate CSS file for this component
import Header from './component/Header'
const Internships = () => {
  const navigate = useNavigate();

  const handleAddFormClick = () => {
    navigate('/tabs');
  };
  const recentForms = [
    { id: 1, title: 'Backend Hiring', formImage: '/form-image.jpeg' },
    { id: 2, title: 'Lead Magnet', formImage: '/form-image.jpeg' },
    { id: 3, title: 'Frontend Hiring', formImage: '/form-image.jpeg' },
    { id: 4, title: 'Designer Hiring', formImage: '/form-image.jpeg' },
  ];

  return (
    <div className='internship-container'>
    <Header title="Internships"/>
    <div className="internships-page">
      
      <div className="add-form-section" onClick={handleAddFormClick}>
        <div className="dotted-box">
          <span>+</span>
        </div>
        <p>Add new Form</p>
      </div>

      {/* Recent Forms Section */}
      <div className="recent-forms-section">
        <h3>Recent Forms</h3>
        <div className="forms-grid">
          {recentForms.map((form) => (
            <div key={form.id} className="form-card">
              <img src={form.formImage} alt={form.title} className="form-image" />
              <p>{form.title}</p>
              <span className="edit-icon">✏️</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Internships;
