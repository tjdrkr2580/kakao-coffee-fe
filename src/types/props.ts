import React, { ReactNode } from "react";

export type headInfoProps = {
  title: string;
  description: string;
};

export type buttonTypes = {
  children: ReactNode;
  color: string;
  onClick: () => void;
};
