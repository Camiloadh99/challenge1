import { IGlobalProps } from "components/interface";
export interface IAlert extends IGlobalProps {
  variant?: string;
  label: string;
  show: boolean;
}
