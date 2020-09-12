import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faInstagram,
  faTelegramPlane,
} from '@fortawesome/free-brands-svg-icons';
import {
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faGithub,
  faInstagram,
  faTelegramPlane,
  faGraduationCap,
)

function Socials () {
  return (
    <ul className="socials">
        <li className="socials__item">
          <a href="https://github.com/mikhailkaryamin" className="socials__icon">
          <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </li>
        <li className="socials__item">
          <a href="https://www.instagram.com/mikhail_karyamin/" className="socials__icon">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
        </li>
        <li className="socials__item">
          <a href="https://t.me/Mikhail_Karyamin" className="socials__icon">
            <FontAwesomeIcon icon={['fab', 'telegram-plane']} />
          </a>
        </li>
        <li className="socials__item">
          <a href="https://htmlacademy.ru/profile/id959581" className="socials__icon">
            <FontAwesomeIcon icon={['fas', 'graduation-cap']} />
          </a>
        </li>
    </ul>
  )
}

export default Socials;