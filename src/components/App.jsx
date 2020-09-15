import React from 'react';

import About from '../sections/About';
import Experience from '../sections/Experience';
import Header from '../sections/Header';
import Home from '../sections/Home';
import Certifications from '../sections/Certifications';
import Tools from '../sections/Tools';

function App () {
  return(
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Certifications />
        <Experience />
        <Tools />
      </main>
    </>
  )
}

export default App;
