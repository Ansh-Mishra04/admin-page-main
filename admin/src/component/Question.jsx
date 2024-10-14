import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignLeft,
  faGripLines,
  faCopy,
  faTrashCan,
  faCheckSquare,
  faCloudUploadAlt,
  faRulerHorizontal,
  faTh,
  faThLarge,
  faCalendarAlt,
  faClock,
  faDotCircle,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import './css/Question.css';

const Question = () => {
  const [question, setQuestion] = useState('Untitled Question');
  const [options, setOptions] = useState(['Option 1']);
  const [isRequired, setIsRequired] = useState(false);
  const [questionType, setQuestionType] = useState('Short answer');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const questionTypes = [
    { value: 'Short answer', icon: faGripLines },
    { value: 'Paragraph', icon: faAlignLeft },
    { value: 'Multiple choice', icon: faDotCircle },
    { value: 'Checkboxes', icon: faCheckSquare },
    { value: 'Drop-down', icon: faCaretDown },
    { value: 'File upload', icon: faCloudUploadAlt },
    { value: 'Linear scale', icon: faRulerHorizontal },
    { value: 'Multiple-choice grid', icon: faTh },
    { value: 'Tick box grid', icon: faThLarge },
    { value: 'Date', icon: faCalendarAlt },
    { value: 'Time', icon: faClock },
  ];

  const handleAddOption = () => {
    setOptions([...options, `Option ${options.length + 1}`]);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleDeleteOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  return (
    <div className="question-options">
      <div className="question-input-container">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="question-input"
        />
        <div className="question-type" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <div className="selected-type">
            <FontAwesomeIcon icon={questionTypes.find((type) => type.value === questionType)?.icon} />
            <span>{questionType}</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          {dropdownOpen && (
            <div className="question-type-dropdown">
              {questionTypes.map((type, index) => (
                <div
                  key={index}
                  className="dropdown-item"
                  onClick={() => {
                    setQuestionType(type.value);
                    setDropdownOpen(false);
                    if (type.value === 'Multiple choice' || type.value === 'Checkboxes' || type.value === 'Drop-down') {
                      setOptions(['Option 1']); // Reset options when selecting these types.
                    }
                  }}
                >
                  <FontAwesomeIcon icon={type.icon} />
                  <span>{type.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="question-input-type">
        {questionType === 'Short answer' && (
          <input type="text" placeholder="Short answer text" className="short-answer-input" />
        )}
        {questionType === 'Paragraph' && (
          <textarea placeholder="Long answer text" className="paragraph-input" rows={4} />
        )}
        {(questionType === 'Multiple choice' || questionType === 'Checkboxes' || questionType === 'Drop-down') && (
          <div className="options-list">
            {options.map((option, index) => (
              <div key={index} className="option-item">
                {questionType === 'Multiple choice' && <input type="radio" disabled />}
                {questionType === 'Checkboxes' && <input type="checkbox" disabled />}
                {questionType === 'Drop-down' && <input type="text" disabled placeholder="Dropdown option" />}
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  className="option-input"
                />
                <button className="delete-option-btn" onClick={() => handleDeleteOption(index)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            ))}
            <button className="add-option-btn" onClick={handleAddOption}>
              Add option
            </button>
            {questionType === 'Multiple choice' && (
              <button className="add-other-btn">Add "Other"</button>
            )}
          </div>
        )}
        {questionType === 'Date' && (
          <input type="date" className="date-input" />
        )}
        {questionType === 'Time' && (
          <input type="time" className="time-input" />
        )}
      </div>

      <div className="question-footer">
        <div className="actions">
          <button className="duplicate-btn">
            <FontAwesomeIcon icon={faCopy} />
          </button>
          <button className="delete-btn">
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
        <div className="required-toggle">
          <label>Required</label>
          <input
            type="checkbox"
            checked={isRequired}
            onChange={() => setIsRequired(!isRequired)}
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
