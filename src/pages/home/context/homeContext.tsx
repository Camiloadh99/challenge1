import React, { useState, createContext, useContext } from "react";

/*
The idea of this context it is allow a mechanism to pass the information between the components of the page.
*/

type contextValues = {
  succesClaim: boolean;
  setSuccesClaim(succesClaim: boolean): void;
};

const defaultValues = {
  succesClaim: false,
  setSuccesClaim: () => {},
};

const HomeContext = createContext<contextValues>(defaultValues);

const HomeContextProvider = (props: any) => {
  const { children } = props;

  const [succesClaim, setSuccesClaim] = useState<boolean>(false);

  const contextValues = {
    succesClaim,
    setSuccesClaim,
  };

  return (
    <HomeContext.Provider value={contextValues}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (context === undefined) {
    throw new Error("HomeContext must be used within a nameProvider");
  }
  return context;
};

export { HomeContext, HomeContextProvider };
