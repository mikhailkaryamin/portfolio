import React from 'react';
import TextLoop from 'react-text-loop';
import { Text } from '../containers/Language';

import Avatar from './Avatar';
import Socials from './Socials';

const PREFIX_AVATAR = 'intro';

function Intro () {
  return (
    <div className="intro">

      <Avatar prefix={PREFIX_AVATAR}/>
  
      <h2 className="intro__name">
        <Text section="intro" value="heading"/>
      </h2>

      <div className="intro__description">
        <Text section="intro" value="iAm"/>
        {' '}
        <TextLoop springConfig={{ stiffness: 180, damping: 10}} interval={1500}>
          <span className="intro__item">
            <Text section="intro" value="frontend"/>
          </span>
          <span className="intro__item">
            <Text section="intro" value="goodMan"/>
          </span>
          <span className="intro__item">
            <Text section="intro" value="enthusiast"/>
          </span>
        </TextLoop>
      </div>

      <Socials />

      <div className="intro__button">
      <a
        className="button button--intro" 
        href="https://mikhailkaryamin.ru/%D0%A0%D0%B5%D0%B7%D1%8E%D0%BC%D0%B5.pdf"
        download
      >
        <Text section={`intro`} value={`button`} />
      </a>
      </div>
    </div>
  )
}

export default Intro;