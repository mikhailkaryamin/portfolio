import React from 'react';

function Card ({ time, title, description, linkCert, linkCourse }) {
  return (
    <div className="card">
      <div className="card__wrapper">
        <span className="card__time">
          {time}
        </span>
        <h3 className="card__title">
          {title}
        </h3>
        <p>
          {description}
        </p>
      </div>
      <ul className="card__list-links">
        <li className="card__item-link">
          <a className="card__link" href={linkCert}>
            Cert
          </a>
        </li>
        <li className="card__item-link">
          <a className="card__link" href={linkCourse}>
            Course
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Card;