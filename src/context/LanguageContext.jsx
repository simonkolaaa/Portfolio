import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('it'); // Lingua di default: Italiano

  const toggleLanguage = (lang) => {
    if (lang) {
      setLanguage(lang);
    } else {
      setLanguage(prev => prev === 'it' ? 'en' : 'it');
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
