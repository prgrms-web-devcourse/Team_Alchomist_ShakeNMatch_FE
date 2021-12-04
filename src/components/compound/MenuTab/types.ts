import type { HTMLAttributes, ReactElement } from 'react';

interface MenuTabProps extends HTMLAttributes<HTMLDivElement> {
  children: [ReactElement, ReactElement];
  initialOnChild: string;
  tabText: [string, string];
}

export type { MenuTabProps };
