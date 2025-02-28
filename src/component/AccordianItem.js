import React from 'react';
import '../styles/AccordianItem.css';

const AccordionItem = ({ title, content, isActive, onClick }) => {
  return (
    <div className={`accordion-item ${isActive ? 'active' : ''}`}>
      <div
        className={`accordion-title ${isActive ? 'active' : ''}`}
        onClick={onClick}
      >
        {title}
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default AccordionItem;
