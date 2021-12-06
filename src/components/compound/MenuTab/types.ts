import type { HTMLAttributes, ReactElement } from 'react';

interface MenuTabProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[];
  initialOnChild: string;
  tabText: string[];
  onTabChange?(id: string): void;
}

export type { MenuTabProps };
