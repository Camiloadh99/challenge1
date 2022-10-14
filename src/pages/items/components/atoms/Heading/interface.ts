import React from "react";
import { IGlobalProps } from "pages/items/components/interface";

export interface IHeading extends IGlobalProps {
  type: string;
  children: React.ReactNode;
}
