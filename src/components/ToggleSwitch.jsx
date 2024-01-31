import React, { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ onChange }) => {
  const [isChecked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!isChecked);
    onChange && onChange(!isChecked);
  };

  return (
    <div className="toggle-switch">
      <label className="switch">
       <input type="checkbox" checked={isChecked} onChange={handleToggle}/>
       <span className="slider round"></span>
      </label>
      <h2>{isChecked ? 'Fahrenheit' : 'Celsius'}</h2>
    </div>
  );
};

export default ToggleSwitch;
