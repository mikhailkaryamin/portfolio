import React from 'react';

function Tool ({ name, icon }) {
  return (
    <div className="tool">
      <div className="tool__item">
        <img src={icon} alt={name} />
      </div>
    </div>
  )
}

export default Tool;