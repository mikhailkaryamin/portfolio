import React from 'react';

function Button ({title, href, prefix}) {
  return (
    <a className={`button ${prefix ? prefix : ``}`} href={href}>
      {title}
    </a>
  )
}

export default Button;