import React, { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

function SmoothScroll ({children , className, href}) {
  useEffect(() => {
    smoothscroll.polyfill();
  })

  function smoothScroll (evt, href) {
    evt.preventDefault();

    const id = href.slice(1);
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

  }

  return (
    <a className={className} href={href} onClick={(evt) => smoothScroll(evt, href)}>
      {children}
    </a>
  )
}

export default SmoothScroll;