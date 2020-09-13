import React from 'react';

import About from '../sections/About'
import Header from '../sections/Header'
import Home from '../sections/Home'
import Tools from '../sections/Tools'

import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  return(
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Tools />
      </main>
    </>
  )
}

export default App;
