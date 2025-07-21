import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';


const QuickActions = () => {
  const navigate = useNavigate();
  

  const actions = [
    { label: ' Add Language', path: '/admin/add-language' },
    { label: ' Add Chapter', path: '/admin/add-chapter' },
    { label: ' View All Orders', path: '/admin/orders' },
    { label: ' Add Membership', path: '/admin/add-membership' },
  ];

  return (
    <div className="quick-actions">
      {actions.map((action, i) => (
        <button key={i} onClick={() => navigate(action.path)} className="neon-button">
          {action.label}
        </button>
      ))}
    </div>
  );
};

export default QuickActions;
