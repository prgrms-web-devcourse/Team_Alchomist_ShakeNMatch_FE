import type { HTMLAttributes } from 'react';

interface ThemeSelectorProps extends HTMLAttributes<HTMLDivElement> {
  initialMainIndex?: number;
  initialDetailIndex?: number;
  onChangeIndex?(value: { main: number; detail: number }): void;
}

export type { ThemeSelectorProps };
