import { IGlobalProps } from "models/components.type";
export enum classNamesInput {
  filled = "filled",
  outlined = "outlined",
  filled_outlined = "filled-outlined",
}

export interface IInputProps extends IGlobalProps {
  type?: string;
  placeholder?: string;
  value: any;
  onChange: any;
  readOnly?: boolean;
  styleName?: string;
  error?: boolean;
  labelError?: string;
}
