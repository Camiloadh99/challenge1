import React, { useState, createContext } from "react";

/*
The idea of this context it is allow a mechanism to pass the information between the pages.
*/

type contextValues = {
  language: string;
  setLanguage(language: string): void;
};

const defaultValues = {
  language: "english",
  setLanguage: () => {},
};

const ApplicationContext = createContext<contextValues>(defaultValues);

const ApplicationContextProvider = (props: any) => {
  const { data } = props;

  const [language, setLanguage] = useState<string>("");

  const contextValues = {
    language,
    setLanguage,
  };

  return (
    <ApplicationContext.Provider value={contextValues}>
      {props.children}
    </ApplicationContext.Provider>
  );
};

export { ApplicationContext, ApplicationContextProvider };
