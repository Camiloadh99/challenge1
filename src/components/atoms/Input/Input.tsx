import React from "react";
import "./style.css";
import { IInputProps } from "./interface";

function Input(props: IInputProps) {
  const {
    handleChange,
    type = "text",
    name,
    placeholder,
    readOnly,
    style = {},
    currentValue,
    className = "",
    id,
    styleName = "standar",
    error,
    labelError = "Error",
  } = props;

  // filled , outlined , border

  const handleOnInputChange = (event: any) => {
    const cliendData = event.target.value;
    handleChange(cliendData);
  };
  const styleError = error ? "error" : "";

  return (
    <form action="">
      <input
        id={id}
        className={`input-stl input-${styleName} ${className} ${styleError}`}
        type={type}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        style={style}
        onChange={(value) => handleOnInputChange(value)}
        value={currentValue}
      ></input>
      {error && <h5 className="text-error">{labelError}</h5>}
    </form>
  );
}
export default Input;
