import { IGlobalProps } from "models/components.type";
export interface IImage extends IGlobalProps {
  alt: string;
  src: string;
  rounded?: boolean;
  circle?: boolean;
  thumbnail?: boolean;
}
