import React from 'react';

export const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fa fa-info-circle'></i> {alert.text}
      </div>
    )
  );
};

export default Alert;
