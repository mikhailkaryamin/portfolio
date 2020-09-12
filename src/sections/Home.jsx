import React from 'react';
import { Container } from 'react-bootstrap';

import Intro from '../components/Intro'
import Particles from '../components/Particles';
import Section from '../components/Section';

function Home () {
  return (
    <Section id="home" className="home">
      <Particles />
      <Container>
      <Intro />
      </Container>
    </Section>
  )
}

export default Home;