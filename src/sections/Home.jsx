import React from 'react';
import { Container } from 'react-bootstrap';

import Intro from '../components/Intro'
import Particles from '../components/Particles';

function Home () {
  return (
    <section id="home" className="home">
      <Particles />
      <Container>
      <Intro />
      </Container>
    </section>
  )
}

export default Home;