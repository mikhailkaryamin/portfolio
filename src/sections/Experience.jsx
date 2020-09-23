import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Text } from '../containers/Language';

import ButtonLink from '../components/ButtonLink';
import CardExperience from '../components/CardExperience';
import Section from '../components/Section';

import nerdsPreview from '../assets/preview-nerds.jpg';
import citiesPreview from '../assets/preview-cities.jpg';
import kekstagramPreview from '../assets/preview-kekstagram.jpg';
import mishkaPreview from '../assets/preview-mishka.jpg';
import taskmanagerPreview from '../assets/preview-taskmanager.jpg';
import wtwPreview from '../assets/preview-wtw.jpg';

const EXPERIENCE_LIST = [
  {
    title: 'Nerds',
    description: <Text section="cardExperience" value="nerds" />,
    technologies: ['HTML', 'CSS', 'JS', 'Fixed'],
    repoLink: 'https://github.com/mikhailkaryamin/nerds',
    projectLink: 'https://mikhailkaryamin.github.io/nerds/',
    preview: nerdsPreview,
  },
  {
    title: 'Mishka',
    description: <Text section="cardExperience" value="mishka" />,
    technologies: ['HTML', 'CSS', 'JS', 'Adaptive' ],
    repoLink: 'https://github.com/mikhailkaryamin/mishka',
    projectLink: 'https://mikhailkaryamin.github.io/mishka/',
    preview: mishkaPreview,
  },
  {
    title: 'Kekstagram',
    description: <Text section="cardExperience" value="kekstagram" />,
    technologies: ['JS ES5'],
    repoLink: 'https://github.com/mikhailkaryamin/kekstagram',
    projectLink: '',
    preview: kekstagramPreview,
  },
  {
    title: 'Task manager',
    description: <Text section="cardExperience" value="taskManager" />,
    technologies: ['JS ES6+'],
    repoLink: 'https://github.com/mikhailkaryamin/tasks-manager',
    projectLink: 'https://mikhailkaryamin.github.io/tasks-manager/',
    preview: taskmanagerPreview,
  },
  {
    title: 'Six cities',
    description: <Text section="cardExperience" value="sixCities" />,
    technologies: ['React', 'Redux', 'TypeScript'],
    repoLink: 'https://github.com/mikhailkaryamin/959581-six-cities-3',
    projectLink: 'https://mikhailkaryamin.github.io/959581-six-cities-3/',
    preview: citiesPreview,
  },
  {
    title: 'What to watch',
    description: <Text section="cardExperience" value="whatToWatch" />,
    technologies: ['React', 'Redux', 'TypeScript'],
    repoLink: 'https://github.com/mikhailkaryamin/what-to-watch',
    projectLink: 'https://mikhailkaryamin.github.io/what-to-watch/',
    preview: wtwPreview,
  }
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