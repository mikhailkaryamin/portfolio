import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Text } from '../containers/Language';

import Avatar from '../components/Avatar';
import Section from '../components/Section';
import Skill from '../components/Skill';

const PREFIX_AVATAR = 'about';
const SKILLS = [
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
];

function About () {
  return (
    <Section id="about">
        <Row>
          <Col md={3}>
            <Avatar prefix={PREFIX_AVATAR} />
          </Col>
          <Col md={9} className="about">
            <div className="about__description">
              <Row>
                <Col md={6}>
                  <p>
                    <Text section="about" value="description" />
                  </p>
                </Col>
                <Col md={6}>
                    {SKILLS.map((bar, i) => {
                      return (
                        <Skill
                          key={`${bar.title}-${i}`}
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