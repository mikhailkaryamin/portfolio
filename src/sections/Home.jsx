import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Particles from '../components/Particles';
import TextLoop from 'react-text-loop';
import avatar from '../assets/icons/avatar.svg';

function Home () {
  return (
    <section id="home" className="home d-flex align-items-center">
      <Particles />
      <Container>
        <div className="intro">
          <img srs={avatar} alt="Mikhail Karyamin" className="mb-4" />

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

          <ul className="light list-inline mb-0 mt-4">
              <li className="list-inline-item">
                <a href="https://github.com">
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com">
                  <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://t.me/Mikhail_Karyamin">
                  <FontAwesomeIcon icon={['fab', 'telegram-plane']} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://htmlacademy.ru/profile/id959581">
                  <FontAwesomeIcon icon={['fab', 'graduation-cap']} />
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