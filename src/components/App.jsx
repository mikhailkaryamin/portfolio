import React from 'react';

import { LanguageProvider } from '../containers/Language';

import About from '../sections/About';
import Contact from '../sections/Contact';
import Certifications from '../sections/Certifications';
import Experience from '../sections/Experience';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import Home from '../sections/Home';
import ScrollToTop from '../components/ScrollToTop';
import Tools from '../sections/Tools';

function App () {
  return(
    <LanguageProvider>
      <Header />
      <main>
        <Home />
        <About />
        <Certifications />
        <Experience />
        <Tools />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </LanguageProvider>
  )
}

export default App;
