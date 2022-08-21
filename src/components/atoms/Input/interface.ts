import { IGlobalProps } from "components/interface";
export enum classNames {
  filled = "filled",
  outlined = "outlined",
  filled_outlined = "filled-outlined",
}
export interface IInputProps extends IGlobalProps {
  type?: string;
  placeholder?: string;
  style?: any;
  currentValue: any;
  handleChange: any;
  readOnly?: boolean;
  className?: string;
  styleName?: string;
  error?: boolean;
  labelError?: string;
}
