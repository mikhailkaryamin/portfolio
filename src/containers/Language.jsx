import React, { useState, createContext, useContext } from 'react';
import { dictionaryList, languageOptions } from '../languages';

const LanguageContext= createContext({
  useLanguage: 'en',
  dictionary: dictionaryList.en,
});

function LanguageProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState('en');

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    changeUserLanguage: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : 'en';
      setUserLanguage(newLanguage);
      window.localStorage.setItem('app-lang', newLanguage)
    }
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  )
}

function Text ({ section, value }) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[section][value] || value;
}

export {
  LanguageContext,
  LanguageProvider,
  Text,
}