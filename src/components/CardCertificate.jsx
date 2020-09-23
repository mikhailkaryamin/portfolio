import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import { Text } from '../containers/Language';

import ButtonLink from './ButtonLink';

library.add(
  faGraduationCap
)

function CardCertificate ({ time, title, description, linkCert, linkCourse }) {
  return (
    <div className="card-certificate">
      <div className="card-certificate__wrapper">
        <FontAwesomeIcon icon={['fas', 'graduation-cap']} className="card-certificate__icon"/>
        <span className="card-certificate__time">
          {time}
        </span>
        <h3 className="card-certificate__title">
          {title}
        </h3>
        <p>
          <Text section="cardCertification" value={description} />
        </p>
      </div>
      <ul className="card-certificate__list-links">
        <li className="card-certificate__button">
          <ButtonLink
            section="cardCertification"
            title="buttonCert"
            href={linkCert}
          />
        </li>
        <li className="card-certificate__button">
          <ButtonLink
            section="cardCertification"
            title="buttonCourse"
            href={linkCourse}
          />
        </li>
      </ul>
    </div>
  )
}

export default CardCertificate;