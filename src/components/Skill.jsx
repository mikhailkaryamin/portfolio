import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

function ProgressBar ({backgroundColor, title, percent}) {
  const [completed, setCompleted] = useState(0);
  const [loaded, setLoaded] = useState(false);

  function onChange (isVisible) {
    if (isVisible && !loaded) {
      setCompleted(percent);
      setLoaded(true);
    }
  }

  return (
    <div className="skill">
      <VisibilitySensor onChange={onChange}>
        <div className="skill__info">
          <h3 className="skill__title">
            {title}
          </h3>
          <span className="skill__percent">
            {`${percent}%`}
          </span>
        </div>
      </VisibilitySensor>
      <div className="skill__progress progress">
          <div className="skill__progress-bar progress-bar"
            style={{ width: `${completed}%`, backgroundColor: `${backgroundColor}` }}
          />
        </div>
    </div>
  )
}

export default ProgressBar;