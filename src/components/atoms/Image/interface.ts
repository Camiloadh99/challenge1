import { IGlobalProps } from "components/interface";
export interface IImage extends IGlobalProps {
  alt: string;
  src: string;
  rounded?: boolean;
  circle?: boolean;
  thumbnail?: boolean;
}
