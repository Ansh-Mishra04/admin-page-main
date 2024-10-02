import React, { useState } from 'react';
import Cards from './Cards';
import './component/css/Courses.css';
import Modal from './component/AddCourse'; // Adjust the import if the path is different

const Courses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
      <div className="section">
        <h2>Add New Course</h2>
        <div className="add-course" onClick={openModal}> {/* Open modal on click */}
          <div className="dotted-box">
            <span>+</span>
          </div>
        </div>
      </div>

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} /> {/* Pass open/close states */}

      <div className="section">
        <h3>Recently Added</h3>
        <Cards courses={fillEmptyCards(recentCourses)} />
      </div>

      <div className="section">
        <h3>A Month Ago</h3>
        <Cards courses={fillEmptyCards(monthAgoCourses)} />
      </div>

      <div className="section">
        <h3>All Courses</h3>
        <Cards courses={fillEmptyCards(allCourses)} />
      </div>
    </div>
  );
};

export default Courses;
