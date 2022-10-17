import { useState, ChangeEvent } from "react";

// Permite hacer un cambio en el input solo creando una variable y pasandola como {...variable}
export const useInputValue = <T>(initialValue: T) => {
  const [value, setValue] = useState<T | any>(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return { value, onChange };
};

// Permite hacer uso del context para traspaso de informacion entre componentes
// Se requiere importar en contexto donde se llame e importarlo en la funcion
export const useInputValueContext = <T>(
  initialValue: T,
  functionContext: any
) => {
  const [value, setValue] = useState<T | any>(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    // Import the set state of the conxtext
    functionContext(e.target.value);
  };
  return { value, onChange };
};
