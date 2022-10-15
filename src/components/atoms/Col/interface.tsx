import React from "react";

import { IGlobalProps } from "models/components.type";
export interface ICol extends IGlobalProps {
  children: React.ReactNode;
  size?: number;
  xl?: number;
  lg?: number;
  md?: number;
}
