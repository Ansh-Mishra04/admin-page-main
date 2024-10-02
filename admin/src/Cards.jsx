import React from 'react';
import { Link } from 'react-router-dom';
import './component/css/Cards.css';
const Cards = ({ courses }) => {
  return (
    <div className="courses-cards">
      <div className="header">
        <h5> </h5>
        <div className="navigation-buttons">
          <button>◄</button>
          <button>►</button>
        </div>
      </div>
      <div className="courses-list">
        {courses.map((course, index) => (
          <div key={course.id || index} className={`card ${course.empty ? 'empty' : ''}`}>
            {!course.empty ? (
              <>
                <img src={course.image} alt={course.title} className="card-image" />
                <div className="card-body">
                  <div className="category">
                    <p>{course.category}</p>
                  </div>
                  <h6 className="course-title">
                    <Link to={`/courses/${course.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                      {course.title}
                    </Link>
                  </h6>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: `${course.progress}%` }}></div>
                  </div>
                  <div className="instructor">
                    <img src={course.instructor.image} alt={course.instructor.name} />
                    <div>
                      <h6>{course.instructor.name}</h6>
                      <p>{course.instructor.title}</p>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
