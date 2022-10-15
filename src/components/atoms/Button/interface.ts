import { IGlobalProps } from "models/components.type";
export interface IButton extends IGlobalProps {
  onClick: any;
  disabled?: boolean;
  type?: any;
  variant?: string;
  outlined?: boolean;
  size?: string;
  label: string;
}
