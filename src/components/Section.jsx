import React from 'react';
import { Container } from 'react-bootstrap';

function Section ({id, title, className, children}) {
  return (
    <section className={className} id={id}>
      <Container>
        <h2 className="section-title">
          {title}
        </h2>

        {children}

      </Container>
    </section>
  )
}

export default Section;