// src/utils/LanguageContext.js
import React, { createContext, useState } from "react";
import { englishContent, portugueseContent } from "./content";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [isEnglishLanguage, setIsEnglishLanguage] = useState(true);

  const toggleLanguage = () => {
    setIsEnglishLanguage((prev) => !prev);
  };

  const content = isEnglishLanguage ? englishContent : portugueseContent;

  return (
    <LanguageContext.Provider
      value={{ content, toggleLanguage, isEnglishLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
