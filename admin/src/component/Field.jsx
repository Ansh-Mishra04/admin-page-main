import React, { useState, useEffect} from 'react';
import './css/Field.css';
import { FaBold, FaItalic, FaUnderline, FaLink, FaStrikethrough } from 'react-icons/fa'
import Question from './Question';

const Field = () => {
  const [title, setTitle] = useState('Untitled Field');
  const [description, setDescription] = useState('');
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
      <Question />
    </div>
  )
}

export default Field