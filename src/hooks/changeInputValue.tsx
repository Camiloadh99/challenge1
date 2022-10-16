import { useState } from "react";

// Permite hacer un cambio en el input solo creando una variable y pasandola como {...variable}
export const useInputValue = (initialValue: any) => {
  const [value, setValue] = useState<any>(initialValue);
  const onChange = (e: any) => setValue(e.target.value);
  return { value, onChange };
};

// Permite hacer uso del context para traspaso de informacion entre componentes
// Se requiere importar en contexto donde se llame e importarlo en la funcion
export const useInputValueContext = (
  initialValue: any,
  functionContext: any
) => {
  const [value, setValue] = useState<any>(initialValue);
  const onChange = (e: any) => {
    setValue(e.target.value);
    // Import the set state of the conxtext
    functionContext(e.target.value);
  };
  return { value, onChange };
};
