import React from 'react';
import Header from '../sections/Header'
import Home from '../sections/Home'
import About from '../sections/About'

import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  return(
    <>
      <Header />
      <main>
        <Home />
        <About />
      </main>
    </>
  )
}

export default App;
