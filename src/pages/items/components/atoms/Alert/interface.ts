import { IGlobalProps } from "pages/items/components/interface";
export interface IAlert extends IGlobalProps {
  variant?: string;
  label: string;
  show: boolean;
}
