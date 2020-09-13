import React from 'react';
import avatar from '../assets/icons/avatar.svg';

function Avatar ({prefix}) {
  return (
    <div className={`avatar avatar--${prefix}`}>
      <img src={avatar} alt="Mikhail Karyamin" />
    </div>
  )
}

export default Avatar;