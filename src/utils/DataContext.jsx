import React, { createContext, useState } from "react";
import { englishData, portugueseData } from "./data";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [isEnglishLanguageProjects, setIsEnglishLanguage] = useState(true);

  const toggleProjectsLanguage = () => {
    setIsEnglishLanguage((prev) => !prev);
  };

  const projectsContent = isEnglishLanguageProjects
    ? englishData
    : portugueseData;

  return (
    <DataContext.Provider
      value={{
        projectsContent,
        toggleProjectsLanguage,
        isEnglishLanguageProjects,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
