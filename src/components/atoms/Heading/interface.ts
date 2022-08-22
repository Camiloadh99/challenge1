import React from "react";
import { IGlobalProps } from "components/interface";

export interface IHeading extends IGlobalProps {
  type: string;
  children: React.ReactNode;
}
