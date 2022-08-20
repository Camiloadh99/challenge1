import React from "react";

export interface ICol {
  children: React.ReactNode;
  size?: number;
  xl?: number;
  lg?: number;
  md?: number;
  style?: any;
  className?: string;
}
