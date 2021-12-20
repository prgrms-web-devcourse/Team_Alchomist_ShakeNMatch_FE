import type { HTMLAttributes, ReactElement } from 'react';

interface MenuTabProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[];
  initialOnChild?: string;
  tabText: string[];
  onTabChange?(id: string): void;
}

interface StyledTabProps extends HTMLAttributes<HTMLDivElement> {
  isSelected: boolean;
}

interface StyledBackgroundProps {
  selectedTab: string;
  size?: number;
  firstTabSize?: number;
}

export type { MenuTabProps, StyledTabProps, StyledBackgroundProps };
