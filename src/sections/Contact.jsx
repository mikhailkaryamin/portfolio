import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';

import PopupMessage from '../components/PopupMessage';
import Section from '../components/Section';

import { PopupMessage as Message} from '../consts';

function Contact () {
  const [showPopup, setShowPopup] = useState(false);
  const [dataPopup, setDataPopup] = useState({});

  function sendMail(e) {
    e.preventDefault();


    emailjs.sendForm('service_d9l3j4i', 'template_1cqv5dk', e.target, 'user_z0Ocda3PgJLn2z5fL9wSd')
      .then(() => {
        setDataPopup(Message.SUCCESS);
        setShowPopup(true);
      }, () => {
        setDataPopup(Message.ERROR);
        setShowPopup(true);
      });
  }

  return (
    <Section id="contact" title="Get In Touch">
      <Row>

        {showPopup && (
          <PopupMessage data={dataPopup} handleMessageClose={setShowPopup} />
        )}

        <Col md={4}>
          <div className="contact-info">
            <h3>Would you like to work with me? Awesome!</h3>
            <p>
                Don't like forms? Send me an <a href="mailto:karyamin.mihail@yandex.ru">email</a>.
                <span role="img" aria-label="wave">👋</span>
              </p>
          </div>
        </Col>
        <Col md={8}>
          <Form onSubmit={sendMail}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="inputName">
                  <Form.Control
                    required
                    type="text"
                    className="input"
                    placeholder="Your name"
                    name="from_name"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="inputEmail">
                  <Form.Control
                    required
                    type="email"
                    className="input"
                    placeholder="Email address"
                    name="email"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group controlId="inputSubject">
                  <Form.Control
                    required
                    type="text"
                    className="input"
                    placeholder="Subject"
                    name="subject"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group controlId="inputMessage">
                  <Form.Control
                    required
                    as="textarea"
                    rows={5}
                    className="input"
                    placeholder="Message"
                    name="message"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <button className="button" type="submit">
                  Send message
                </button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Section>
  )
}

export default Contact;