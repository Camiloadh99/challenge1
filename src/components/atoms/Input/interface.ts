import { IGlobalProps } from "components/interface";
export enum classNamesInput {
  filled = "filled",
  outlined = "outlined",
  filled_outlined = "filled-outlined",
}

export interface IInputProps extends IGlobalProps {
  type?: string;
  placeholder?: string;
  currentValue: any;
  handleChange: any;
  readOnly?: boolean;
  styleName?: string;
  error?: boolean;
  labelError?: string;
}
