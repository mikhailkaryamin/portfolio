import React from 'react';
import { Col, Row, } from 'react-bootstrap';

import CardCertificate from '../components/CardCertificate';
import Section from '../components/Section';

const CERTIFICATIONS = [
  {
    time: '01.19-03.19',
    title: 'HTML & CSS, lvl 1',
    description: 'htmlCssLvl1',
    linkCert: 'https://assets.htmlacademy.ru/certificates/intensive/107/959581.pdf',
    linkCourse: 'https://htmlacademy.ru/intensive/htmlcss',
  },
  {
    time: '03.19-05.19',
    title: 'HTML & CSS, lvl 2',
    description: 'htmlCssLvl2',
    linkCert: 'https://assets.htmlacademy.ru/certificates/intensive/113/959581.pdf',
    linkCourse: 'https://htmlacademy.ru/intensive/adaptive',
  },
  {
    time: '06.19-08.19',
    title: 'JavaScript, lvl 1',
    description: 'jsLvl1',
    linkCert: 'https://assets.htmlacademy.ru/certificates/intensive/119/959581.pdf',
    linkCourse: 'https://htmlacademy.ru/intensive/javascript',
  },
  {
    time: '01.19-08.19',
    title: 'Front-end Developer',
    description: 'frontend',
    linkCert: 'https://assets.htmlacademy.ru/certificates/profession/4/959581.pdf',
    linkCourse: 'https://htmlacademy.ru/profession/frontender',
  },
  {
    time: '08.19-10.19',
    title: 'JavaScript, lvl 2',
    description: 'jsLvl2',
    linkCert: 'https://assets.htmlacademy.ru/certificates/intensive/137/959581.pdf',
    linkCourse: 'https://htmlacademy.ru/intensive/ecmascript',
  },
  {
    time: '02.20-04.20',
    title: 'JavaScript, lvl 3',
    description: 'jsLvl3',
    linkCert: 'https://assets.htmlacademy.ru/certificates/intensive/139/959581.pdf',
    linkCourse: 'https://htmlacademy.ru/intensive/react',
  },

]

function Certifications () {
  return (
    <Section id="certifications">
      <Row>
        {
          CERTIFICATIONS.map((cert, i) => {
            const {
              time,
              title,
              description,
              linkCert,
              linkCourse,
            } = cert;

            return (
              <Col
                xl={4}
                md={6}
                xs={12}
                className="mb-4 d-flex"
                key={`${cert.title}-${i}`}
              >
                <CardCertificate
                  time={time}
                  title={title}
                  description={description}
                  linkCert={linkCert}
                  linkCourse={linkCourse}
                />
              </Col>
            )
          })
        }
      </Row>
    </Section>
  )
}

export default Certifications;