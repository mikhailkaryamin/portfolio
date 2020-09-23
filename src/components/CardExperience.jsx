import React from 'react';

import ButtonLink from './ButtonLink';

function CardExperience ({ title, description, repoLink, projectLink, preview, technologies }) {
  return (
    <div className="card-experience">
      <div className="card-experience__wrapper">
        <div className="card-experience__image"> 
          <img src={preview} alt={title} />
        </div>
        <h3 className="card-experience__title">
          {title}
        </h3>
        <p className="card-experience__text">
          {description}
        </p>
        <ul className="card-experience__technologies">
          {technologies.map((technology, i) => {
            return (
              <li
                key={`${technology}-${i}`}
                className="card-experience__technology"
              >
                {technology}
              </li>
            )
          })}
        </ul>
        <ul className="card-experience__list-links">
          {projectLink && (
            <li className="card-experience__button">
              <ButtonLink
                section="cardExperience"
                title='buttonSeeLive'
                href={projectLink}
              />
            </li>
          )}
          <li className="card-experience__button">
            <ButtonLink
              section="cardExperience"
              title='buttonSourceCode'
              href={repoLink}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CardExperience;