import React, { useState } from 'react';
import Cards from './Cards'; // Assuming Cards.jsx takes a list of courses
import './component/css/Courses.css';
import Modal from './component/AddCourse';  // Import the Modal
import Header from './component/Header'


const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state to open/close

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Example course data for recently added courses
  const recentCourses = [
    {
      id: 1,
      image: '/image6.jpeg',
      category: 'OBJECT ORIENTED',
      title: 'Core Java: Expert',
      progress: 65,
      instructor: {
        image: '/image9.jpeg',
        name: 'Prashant Kumar Singh',
        title: 'Software Developer',
      },
    },
    // More courses...
  ];

  const monthAgoCourses = [
    {
      id: 2,
      image: '/image7.png',
      category: 'FRONTEND',
      title: 'Beginner’s Guide To Becoming A Professional Frontend Developer',
      progress: 65,
      instructor: {
        image: '/image9.jpeg',
        name: 'Prashant Kumar Singh',
        title: 'Software Developer',
      },
    },
  ];

  const allCourses = [...recentCourses, ...monthAgoCourses];

  const fillEmptyCards = (courses) => {
    const fullRowLength = 4;
    const emptyCardsNeeded = fullRowLength - (courses.length % fullRowLength);
    return courses.length % fullRowLength === 0 ? courses : [...courses, ...Array(emptyCardsNeeded).fill({ empty: true })];
  };

  return (
    <div className="courses-page">
      {/* Section for adding a new course */}
      <Header title="Projects"/>
      <div className="section">
        <h2>Add New Project</h2>
        <div className="add-course">
          <div className="dotted-box" onClick={openModal}>  {/* Open modal on click */}
            <span>+</span>
          </div>
        </div>
      </div>

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />  {/* Pass open/close states */}

      {/* Sections for displaying courses */}
      <div className="section">
        <h3>Recently Added</h3>
        <Cards courses={fillEmptyCards(recentCourses)} />
      </div>

      <div className="section">
        <h3>A Month Ago</h3>
        <Cards courses={fillEmptyCards(monthAgoCourses)} />
      </div>

      <div className="section">
        <h3>All Projects</h3>
        <Cards courses={fillEmptyCards(allCourses)} />
      </div>
    </div>
  );
};

export default Project;
