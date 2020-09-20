import React from 'react';
import { Container } from 'react-bootstrap';

function Footer () {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <Container>
            <div className="copyright">
              Copyright © 2020 Karyamin Mikhail
            </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer;
