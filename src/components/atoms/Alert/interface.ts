import { IGlobalProps } from "models/components.type";
export interface IAlert extends IGlobalProps {
  variant?: string;
  label: string;
  show: boolean;
}
