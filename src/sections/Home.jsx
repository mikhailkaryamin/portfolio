import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Particles from '../components/Particles';
import TextLoop from 'react-text-loop';
import avatar from '../assets/icons/avatar.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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


function Home () {
  return (
    <section id="home" className="home d-flex align-items-center">
      <Particles />
      <Container>
        <div className="intro">
          <img src={avatar} alt="Mikhail Karyamin" className="mb-4" />

          <h1 className="mb-2 mt-0">
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

          <ul className="social-icons light list-inline mb-0 mt-4">
              <li className="social-icons__item list-inline-item">
                <a href="https://github.com/mikhailkaryamin" className="social-icons__icon">
                <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
              </li>
              <li className="social-icons__item list-inline-item">
                <a href="https://www.instagram.com/mikhail_karyamin/" className="social-icons__icon">
                  <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
              </li>
              <li className="social-icons__item list-inline-item">
                <a href="https://t.me/Mikhail_Karyamin" className="social-icons__icon">
                  <FontAwesomeIcon icon={['fab', 'telegram-plane']} />
                </a>
              </li>
              <li className="social-icons__item list-inline-item">
                <a href="https://htmlacademy.ru/profile/id959581" className="social-icons__icon">
                  <FontAwesomeIcon icon={['fas', 'graduation-cap']} />
                </a>
              </li>
          </ul>

          <div className="mt-4">
              <Button variant="kd">Contact me</Button>
            </div>
        </div>
      </Container>
    </section>
  )
}

export default Home;