import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Section from '../components/Section';
import Skill from '../components/Skill'
import avatar from '../assets/icons/avatar.svg'

const SKILL_DATA = [
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
    <Section id="about" title="About me">
      <Row className="about">
        <Col md={3}>
          <div className="about__avatar">
            <img src={avatar} alt="Mikhail Karyamin" />
          </div>
        </Col>
        <Col md={9} className="about__content-box">
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
                  {SKILL_DATA.map((bar, i) => {
                    return (
                      <Skill
                        key={`bar.title-${i}`}
                        backgroundColor={bar.color}
                        percent={bar.percent}
                        title={bar.title}
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