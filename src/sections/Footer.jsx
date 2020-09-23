import React from 'react';
import { Container } from 'react-bootstrap';
import { Text } from '../containers/Language';

function Footer () {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <Container>
            <div className="copyright">
              © 2020
              {' '}
              <Text section="footer" value="name" />
            </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer;
