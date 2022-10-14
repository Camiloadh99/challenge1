import { IGlobalProps } from "pages/items/components/interface";
export enum classNamesInput {
  filled = "filled",
  outlined = "outlined",
  filled_outlined = "filled-outlined",
}

export interface IInputProps extends IGlobalProps {
  type?: string;
  placeholder?: string;
  currentValue: any;
  handleChange: Function;
  readOnly?: boolean;
  styleName?: string;
  error?: boolean;
  labelError?: string;
}
