import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Text } from '../containers/Language';

import ButtonLink from '../components/ButtonLink';
import CardExperience from '../components/CardExperience';
import Section from '../components/Section';

import mishkaPreview from '../assets/preview-mishka.jpg';
import pinkPreview from '../assets/preview-pink.jpg';
import pictureMatchPreview from '../assets/preview-picture-match.jpg';
import countDayPreview from '../assets/preview-count-day.jpg';

const EXPERIENCE_LIST = [
  {
    title: 'Mishka',
    description: <Text section="cardExperience" value="mishka" />,
    technologies: ['HTML', 'CSS', 'JS', 'Adaptive' ],
    repoLink: 'https://github.com/mikhailkaryamin/mishka',
    projectLink: 'https://mikhailkaryamin.github.io/mishka/',
    preview: mishkaPreview,
  },
  {
    title: 'Pink',
    description: <Text section="cardExperience" value="pink" />,
    technologies: ['HTML', 'CSS', 'JS', 'Adaptive' ],
    repoLink: 'https://github.com/mikhailkaryamin/pink',
    projectLink: 'https://mikhailkaryamin.github.io/pink/',
    preview: pinkPreview,
  },
  {
    title: 'Picture match',
    description: <Text section="cardExperience" value="pictureMatch" />,
    technologies: ['React', 'Redux', 'TypeScript'],
    repoLink: 'https://github.com/mikhailkaryamin/picture-match',
    projectLink: 'https://mikhailkaryamin.github.io/picture-match/',
    preview: pictureMatchPreview,
  },
  {
    title: 'Count day',
    description: <Text section="cardExperience" value="countDay" />,
    technologies: ['React-native', 'useContext+useReducer', 'TypeScript'],
    repoLink: 'https://github.com/mikhailkaryamin/count-day',
    projectLink: '',
    preview: countDayPreview,
  },
];

const ButtonShowMore = {
  HREF: 'https://github.com/mikhailkaryamin',
  PREFIX: 'show-more',
  TITLE: 'buttonSeeMore',
};

function Experience () {
  return (
    <Section id="experience" title="Experience">
      <Row>
        {EXPERIENCE_LIST.map((experience, i) => {
          const {
            title,
            description,
            repoLink,
            projectLink,
            preview,
            technologies,
          } = experience;

          return (
            <Col
              lg={6}
              className="mb-4 d-flex"
              key={`${experience}-${i}`}
            >
              <CardExperience
                title={title}
                description={description}
                repoLink={repoLink}
                preview={preview}
                projectLink={projectLink}
                technologies={technologies}
              />
            </Col>
          )
        })}
      </Row>
      <Row>
        <Col
          xs={12}
        >
          <ButtonLink
            section="experience"
            href={ButtonShowMore.HREF}
            prefix={ButtonShowMore.PREFIX}
            title={ButtonShowMore.TITLE}
          />
        </Col>
      </Row>
    </Section>
  )
}

export default Experience;
