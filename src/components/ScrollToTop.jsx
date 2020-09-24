import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faLongArrowAltUp,
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faLongArrowAltUp
)

function ScrollToTop () {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollToTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  window.addEventListener('scroll', checkScrollToTop);

  return (
    <div
      className="scroll-to-top"
      style={{ display: showScroll ? "block" : "none"}}
      onClick={scrollTop}
    >
      <FontAwesomeIcon icon={['fas', 'long-arrow-alt-up']} />
    </div>
  )
}

export default ScrollToTop;