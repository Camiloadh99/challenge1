import { IGlobalProps } from "pages/items/components/interface";
export interface IImage extends IGlobalProps {
  alt: string;
  src: string;
  rounded?: boolean;
  circle?: boolean;
  thumbnail?: boolean;
}
