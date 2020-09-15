import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Section from '../components/Section';
import CardExperience from '../components/CardExperience';

import nerdsPreview from '../assets/preview-nerds.jpg';
import citiesPreview from '../assets/preview-cities.jpg';
import kekstagramPreview from '../assets/preview-kekstagram.jpg';
import mishkaPreview from '../assets/preview-mishka.jpg';
import taskmanagerPreview from '../assets/preview-taskmanager.jpg';
import wtwPreview from '../assets/preview-wtw.jpg';

const EXPERIENCE_LIST = [
  {
    title: 'Nerds',
    description: 'My first project. A landing page for design studio from Krasnodar.',
    technologies: ['HTML', 'CSS', 'JS', 'Fixed'],
    repoLink: 'https://github.com/mikhailkaryamin/nerds',
    projectLink: '',
    preview: nerdsPreview,
  },
  {
    title: 'Mishka',
    description: 'Online store of handmade toys.',
    technologies: ['HTML', 'CSS', 'JS', 'Adaptive' ],
    repoLink: 'https://github.com/mikhailkaryamin/mishka',
    projectLink: '',
    preview: mishkaPreview,
  },
  {
    title: 'Kekstagram',
    description: 'Little clone instagram.',
    technologies: ['JS ES5'],
    repoLink: 'https://github.com/mikhailkaryamin/kekstagram',
    projectLink: '',
    preview: kekstagramPreview,
  },
  {
    title: 'Task manager',
    description: 'Task manager application.',
    technologies: ['JS ES6+'],
    repoLink: 'https://github.com/mikhailkaryamin/tasks-manager',
    projectLink: '',
    preview: taskmanagerPreview,
  },
  {
    title: 'Six cities',
    description: 'Application for finding housing.',
    technologies: ['React', 'Redux', 'TypeScript'],
    repoLink: 'https://github.com/mikhailkaryamin/959581-six-cities-3',
    projectLink: '',
    preview: citiesPreview,
  },
  {
    title: 'What to watch',
    description: 'Online cinema.',
    technologies: ['React', 'Redux', 'TypeScript'],
    repoLink: 'https://github.com/mikhailkaryamin/what-to-watch',
    projectLink: '',
    preview: wtwPreview,
  }
]

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
    </Section>
  )
}

export default Experience;