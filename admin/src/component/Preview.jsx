import React, { useState } from 'react';
import './css/preview.css';  // Importing the CSS file

const Help = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    whatsappNumber: '',
    degree: '',
    cityCountry: '',
    college: '',
    role: '',
    internshipBefore: '',
    pastExperience: '',
    githubLink: '',
    agreeToTerms: false,  // New state for checkbox
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,  // Handle checkbox separately
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions before submitting.');
      return;
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <h2 className="title">Gracheiver's Free Remote Internship Program</h2>
      <form onSubmit={handleSubmit} className="form">
    <div 
      className="container" 
      style={{
        maxWidth: '100%', 
        margin: '50px auto', 
        padding: '20px', 
        backgroundColor: '#f7f7f7', 
        borderRadius: '8px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Gracheiver's Free Remote Internship Program
      </h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Enter your contact number"
            required
          />
        </div>
        <div className="form-group">
          <label>WhatsApp Number</label>
          <input
            type="text"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
            placeholder="Enter your WhatsApp number"
            required
          />
        </div>
        <div className="form-group">
          <label>Course/Degree (What currently pursuing)</label>
          <input
            type="text"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            placeholder="Enter your degree or course name"
            required
          />
        </div>
        <div className="form-group">
          <label>City/Country</label>
          <input
            type="text"
            name="cityCountry"
            value={formData.cityCountry}
            onChange={handleChange}
            placeholder="Enter your city/country"
            required
          />
        </div>
        <div className="form-group">
          <label>College Name, City</label>
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
            placeholder="Enter your college name, city"
            required
          />
        </div>
        <div className="form-group">
          <label>Role in which you have better grip</label>
          <select name="role" value={formData.role} onChange={handleChange} required>
            <option value="">Select role</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
          </select>
        </div>
        <div className="form-group">
          <label>Did any internship before?</label>
          <select name="internshipBefore" value={formData.internshipBefore} onChange={handleChange} required>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        <div className="form-group">
          <label>Past Experience</label>
          <textarea
            name="pastExperience"
            value={formData.pastExperience}
            onChange={handleChange}
            placeholder="Enter your past experience"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Github Link</label>
          <input
            type="url"
            name="githubLink"
            value={formData.githubLink}
            onChange={handleChange}
            placeholder="Enter your GitHub link"
            required
          />
        </div>
        <button 
          type="submit" 
          style={{ 
            backgroundColor: '#007bff', 
            color: 'white', 
            padding: '10px', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Submit
        </button>
        </form>
        </div>
      </form>
    </div>
  );
};

export default Help;
