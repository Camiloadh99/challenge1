import React, { useState, createContext, useContext } from "react";

/*
The idea of this context it is allow a mechanism to pass the information between the components of the page.
*/

type contextValues = {
  item: string;
  setItem(item: string): void;
};

const defaultValues = {
  item: "",
  setItem: () => {},
};

const ItemContext = createContext<contextValues>(defaultValues);

const ItemContextProvider = (props: any) => {
  const { children } = props;

  const [item, setItem] = useState<string>("");

  const contextValues = {
    item,
    setItem,
  };

  return (
    <ItemContext.Provider value={contextValues}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => {
  const context = useContext(ItemContext);
  if (context === undefined) {
    throw new Error("ItemContext must be used within a ItemProvider");
  }
  return context;
};

export { ItemContext, ItemContextProvider };
