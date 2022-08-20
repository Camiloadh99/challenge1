export enum classNames {
  filled = "filled",
  outlined = "outlined",
  filled_outlined = "filled-outlined",
}
export interface IInputProps {
  type?: string;
  name?: string;
  id?: string;
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
