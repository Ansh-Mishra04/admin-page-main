import React, { useState } from 'react';

const InternshipForm = () => {
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, like sending form data to a backend or logging it
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Gracheiver's Free remote internship program</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InternshipForm;