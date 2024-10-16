import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Sidebar.css';
import { FaUser, FaProjectDiagram, FaUnlockAlt,FaBriefcase, FaGraduationCap, FaQuestionCircle, FaArrowDown, FaPhone, FaSignOutAlt, FaThLarge } from 'react-icons/fa';

const Sidebar = () => {
    const [selected, setSelected] = useState('Dashboard');
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const savedSelection = localStorage.getItem('selected');
        if (savedSelection) {
            setSelected(savedSelection);
        }
    }, []);

    const handleSelect = (item) => {
        setSelected(item);
        localStorage.setItem('selected', item);
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className='mainbar'>
            <div className="d-flex flex-column bg-light" style={{ position: 'fixed', width: '230px', height: '100%', overflowY: 'auto' }}>
                <div className="d-flex mb-5">
                    <img src="/Grachiever.png" alt="Grachiever Logo" className="logo" />
                </div>
                <ul className="nav nav-pills flex-column mb-auto p-3">
                    <li className="nav-item">
                        <Link to="/" className={`nav-loggedIn ${selected === 'LogIn' ? 'active' : ''}`} onClick={() => handleSelect('Login')}>
                            <FaUnlockAlt className="me-3" />
                            Logged in!
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard" className={`nav-link ${selected === 'Dashboard' ? 'active' : ''}`} onClick={() => handleSelect('Dashboard')}>
                            <FaThLarge className="me-3" />
                            Dashboard
                            <span className="nav-arrow">⮞</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className={`nav-link ${selected === 'Projects' ? 'active' : ''}`} onClick={() => handleSelect('Projects')}>
                            <FaProjectDiagram className="me-3" />
                            Projects
                            <span className="nav-arrow">⮞</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/courses" className={`nav-link ${selected === 'Courses' ? 'active' : ''}`} onClick={() => handleSelect('Courses')}>
                            <FaGraduationCap className="me-3" />
                            Courses
                            <span className="nav-arrow">⮞</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/internships" className={`nav-link ${selected === 'Internships' ? 'active' : ''}`} onClick={() => handleSelect('Internship')}>
                            <FaBriefcase className="me-3" />
                            Internships
                            <span className="nav-arrow">⮞</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/help" className={`nav-link ${selected === 'Help' ? 'active' : ''}`} onClick={() => handleSelect('Help')}>
                            <FaQuestionCircle className="me-3" />
                            Help
                            <span className="nav-arrow">⮞</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
