import React, { useState, useContext } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { Text } from '../containers/Language';

import { LanguageContext } from '../containers/Language';

import PopupMessage from '../components/PopupMessage';
import Section from '../components/Section';

import { PopupMessage as Message} from '../consts';

function Contact () {
  const [showPopup, setShowPopup] = useState(false);
  const [dataPopup, setDataPopup] = useState({});
  
  const ctx = useContext(LanguageContext);
  const {
    yourName,
    email,
    subject,
    message,
  } = ctx.dictionary.contact.placeHolder;

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
    <Section id="contact">
      <Row>

        {showPopup && (
          <PopupMessage data={dataPopup} handleMessageClose={setShowPopup} />
        )}

        <Col md={4}>
          <div className="contact-info">
            <h3>
              <Text section="contact" value="infoHeading" />
            </h3>
            <p>
                <Text section="contact" value="infoEmail" />
                {' '}
                <a href="mailto:karyamin.mihail@yandex.ru">email</a>.
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
                    placeholder={yourName}
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
                    placeholder={email}
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
                    placeholder={subject}
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
                    placeholder={message}
                    name="message"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <button className="button" type="submit">
                  <Text section="contact" value="buttonSendMessage" />
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