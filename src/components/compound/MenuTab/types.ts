import type { HTMLAttributes, ReactElement } from 'react';

interface MenuTabProps extends HTMLAttributes<HTMLDivElement> {
  children: [ReactElement, ReactElement];
  initialOnChild: string;
  tabText: [string, string];
  onTabChange(id: string): void;
}

export type { MenuTabProps };
