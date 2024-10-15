import React, { useState } from 'react';
import './css/Field.css';
import { FaBold, FaItalic, FaUnderline, FaLink, FaStrikethrough } from 'react-icons/fa';
import Question from './Question';

const Field = () => {
  const [title, setTitle] = useState('Untitled Field');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([{ id: Date.now() }]); // Initialize with one question

  // Function to add a new question
  const addQuestion = () => {
    setQuestions([...questions, { id: Date.now() }]);
  };

  return (
    <div className="form">
      <div className="form-title">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title-input"
        />
        <div className="toolbar">
          <button><FaBold /></button>
          <button><FaItalic /></button>
          <button><FaUnderline /></button>
          <button><FaLink /></button>
          <button><FaStrikethrough /></button>
        </div>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="description-input"
        />
      </div>

      {/* Dynamically rendering questions */}
      {questions.map((question) => (
        <Question key={question.id} />
      ))}

      {/* Button to add a new question */}
      <button className="add-question-btn" onClick={addQuestion}>Add Question</button>
    </div>
  );
};

export default Field;
