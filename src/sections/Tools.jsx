import React from 'react';
import { Col, Row, } from 'react-bootstrap';

import bash from '../assets/icons/tools/bash.svg';
import bootstrap4 from '../assets/icons/tools/bootstrap4.png';
import css3 from '../assets/icons/tools/css3.png';
import figma from '../assets/icons/tools/figma.png';
import github from '../assets/icons/tools/github.svg';
import gulp from '../assets/icons/tools/gulp.png';
import html5 from '../assets/icons/tools/html5.png';
import jest from '../assets/icons/tools/jest.svg';
import js from '../assets/icons/tools/js.png';
import less from '../assets/icons/tools/less.png';
import npm from '../assets/icons/tools/npm.png';
import photoshop from '../assets/icons/tools/photoshop.svg';
import react from '../assets/icons/tools/react.png';
import redux from '../assets/icons/tools/redux.svg';
import sass from '../assets/icons/tools/sass.png';
import typescript from '../assets/icons/tools/typescript.svg';
import vscode from '../assets/icons/tools/vscode.png';
import webpack from '../assets/icons/tools/webpack.svg';

import Section from '../components/Section';
import Tool from '../components/Tool';

const TOOLS = [
  {
    name: 'bash',
    icon: bash,
  }, {
    name: 'bootstrap4',
    icon: bootstrap4,
  },  {
    name: 'css3',
    icon: css3,
  }, {
    name: 'figma',
    icon: figma,
  }, {
    name: 'github',
    icon: github,
  }, {
    name: 'gulp',
    icon: gulp,
  }, {
    name: 'html5',
    icon: html5,
  }, {
    name: 'jest',
    icon: jest,
  }, {
    name: 'js',
    icon: js,
  }, {
    name: 'less',
    icon: less,
  }, {
    name: 'npm',
    icon: npm,
  }, {
    name: 'photoshop',
    icon: photoshop,
  }, {
    name: 'react',
    icon: react,
  }, {
    name: 'redux',
    icon: redux,
  }, {
    name: 'sass',
    icon: sass,
  }, {
    name: 'typescript',
    icon: typescript,
  }, {
    name: 'vscode',
    icon: vscode,
  }, {
    name: 'webpack',
    icon: webpack,
  },
];


function Tools () {
  return (
    <Section id="tools" title="Tools">
        <Row>
          {TOOLS.map((tool, i) => {
            return (
              <Col md={4} xs={6} key={`${tool.name}-${i}`}>
                <Tool
                  icon={tool.icon}
                  name={tool.name}
                />
              </Col>
            )
          })}
        </Row>
    </Section>
  )
}

export default Tools;