import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Text } from '../containers/Language';

function Section ({id, className, children}) {
  return (
    <section className={className} id={id}>
      <Container>

        <h2 className="section-title">
          <Text section={id} value="title"/>
        </h2>

        <Fade bottom cascade>
          {children}
        </Fade>

      </Container>
    </section>
  )
}

export default Section;