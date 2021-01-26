import React, { useContext, useState, useEffect } from 'react';

import { languageOptions } from '../languages';
import { LanguageContext } from '../containers/Language';

import {ReactComponent as LangIcon} from '../assets/icons/languages.svg'

function LanguageSelector() {
  const { userLanguage, changeUserLanguage } = useContext(LanguageContext);
  const [nextLang, changeNextLang] = useState(userLanguage);

  const currentLang = nextLang === 'ru' ? 'en': 'ru';

  const handleLanguageChange = () => {
    changeUserLanguage(nextLang);

    changeNextLang(currentLang);
  };

  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem('app-lang');
    if (!defaultLanguage) {
      defaultLanguage = window.navigator.language.substring(0, 2);
    }

    changeUserLanguage(defaultLanguage);
  }, [changeUserLanguage]);

  return (
    <button onClick={handleLanguageChange} className="language-selector">
      <LangIcon />
      {languageOptions[nextLang]}
    </button>
  )
}
export default LanguageSelector;
