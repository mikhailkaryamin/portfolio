import React from 'react';
import { Text } from '../containers/Language';

function ButtonLink ({section, title, href, prefix}) {
  return (
    <a className={`button ${prefix ? `button--${prefix}` : ``}`} href={href}>
      <Text section={section} value={title} />
    </a>
  )
}

export default ButtonLink;