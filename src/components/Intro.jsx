import React from 'react';
import { Button } from 'react-bootstrap';
import TextLoop from 'react-text-loop';

import Avatar from './Avatar';
import Socials from './Socials';

const PREFIX_AVATAR = 'intro';

function Intro () {
  return (
    <div className="intro">

      <Avatar prefix={PREFIX_AVATAR}/>
  
      <h1 className="intro__name">
        Mikhail Karyamin
      </h1>

      <span>
        I'm a
        {' '}
        <TextLoop springConfig={{ stiffness: 180, damping: 10}} interval={1500}>
          <span>Front-End developer</span>
          <span>Good man</span>
          <span>Enthusiast</span>
        </TextLoop>
      </span>

      <Socials />

      <div className="intro__button">
          <Button variant="kd">Contact me</Button>
      </div>
    </div>
  )
}

export default Intro;