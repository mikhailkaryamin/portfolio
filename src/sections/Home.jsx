import React from 'react';
import { Text } from '../containers/Language';
import { Container } from 'react-bootstrap';

import Intro from '../components/Intro'
import Particles from '../components/Particles';

function Home () {
  return (
    <section id="home" className="home">
      <h1 className="visually-hidden">
        <Text section="home" value="heading"/>
        Portfolio Karyamin Mikhail
      </h1>
      <Particles />
      <Container>
      <Intro />
      </Container>
    </section>
  )
}

export default Home;