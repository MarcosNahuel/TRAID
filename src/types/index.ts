import { ComponentType, ReactNode } from "react";

export type CaseStudy = {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  cardBackground: string;
  highlight: {
    value: string;
    label: string;
    colorClass: string;
  };
  tags: string[];
  component: ComponentType;
  modalDescription: string;
  hideModalHeader?: boolean;
};

export type HeroStat = {
  value: number;
  suffix: string;
  label: string;
};
