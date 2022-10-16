import "./style.css";
import { IInputProps } from "./interface";

function Input(props: IInputProps) {
  const {
    onChange,
    type = "text",
    name,
    placeholder,
    readOnly,
    style = {},
    value,
    className = "",
    id,
    styleName = "standar",
    error,
    labelError = "Error",
  } = props;

  // filled , outlined , border

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
        onChange={onChange}
        value={value}
      ></input>
      {error && <h5 className="text-error">{labelError}</h5>}
    </form>
  );
}
export default Input;
