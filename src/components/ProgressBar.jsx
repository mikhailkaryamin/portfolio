import React from 'react';

function ProgressBar ({backgroundColor, title, percent}) {
  return (
    <div className="progress-item">
      <div className="progress-item__info">
        <h3 className="progress-item__headline">
          {title}
        </h3>
        <span className="progress-item__percent">
          {`${percent}%`}
        </span>
      </div>
      <div className="progress-item__bar">
          <div
            style={{ width: `${percent}%`, backgroundColor: `${backgroundColor}` }}
          />
        </div>
    </div>
  )
}

export default ProgressBar;