import "./style.css";
import { IInputProps } from "./interface";
export default function InputForm(props: IInputProps) {
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
    styleName = "outlined",
    error,
    labelError = "Error",
  } = props;

  // filled , outlined , border

  const styleError = error ? "error" : "";

  return (
    <div className="container_error">
      <div className={error ? "error-img" : ""}>
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
        {error && <h5 className="text-error error__text">{labelError}</h5>}
      </div>
    </div>
  );
}
