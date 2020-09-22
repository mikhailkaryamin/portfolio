import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

function Section ({id, title, className, children}) {
  return (
    <section className={className} id={id}>
      <Container>

        {title && (
          <h2 className="section-title">
            {title}
          </h2>
        )}

        <Fade bottom cascade>
          {children}
        </Fade>

      </Container>
    </section>
  )
}

export default Section;