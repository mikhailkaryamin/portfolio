import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Section from '../components/Section';
import ProgressBar from '../components/ProgressBar'
import avatar from '../assets/icons/avatar.svg'

const PROGRESS_BAR_DATA = [
  {
    title: 'JavaScript',
    percent: 90,
    color: '#ff0d29',
  }, 
  {
    title: 'TypeScript',
    percent: 85,
    color: '#29ff0d',
  },
  {
    title: 'React',
    percent: 80,
    color: '#0d45ff',
  }, 
  {
    title: 'HTML',
    percent: 75,
    color: '#ff7a0d',
  }, 
  {
    title: 'CSS',
    percent: 75,
    color: '#ff0dcb',
  }, 
]

function About () {
  return (
    <Section id="about" title="About me" className="about">
      <Row>
        <Col md={3}>
          <div className="about__avatar">
            <img src={avatar} alt="Mikhail Karyamin" />
          </div>
        </Col>
        <Col md={9} className="triangle-left-md triangle-top-sm">
          <div className="about__description">
            <Row>
              <Col md={6}>
                <p>
                  I am Mikhail Karyamin, a frontend developer with more than 2 years 
                  of experience in developing, testing and web applications.
                  I'm looking a good team to work together.
                </p>
              </Col>
              <Col md={6}>
                  {PROGRESS_BAR_DATA.map((bar) => {
                    return (
                      <ProgressBar
                        title={bar.title}
                        percent={bar.percent}
                        backgroundColor={bar.color}
                      />
                    )
                  })}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Section>
  )
}

export default About;