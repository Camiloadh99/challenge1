import { IGlobalProps } from "pages/items/components/interface";
export interface IButton extends IGlobalProps {
  onClick: any;
  disabled?: boolean;
  type?: any;
  variant?: string;
  outlined?: boolean;
  size?: string;
  label: string;
}
