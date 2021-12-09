import type { HTMLAttributes } from 'react';

interface ThemeSelectorProps extends HTMLAttributes<HTMLDivElement> {
  initialMainIndex?: number;
  initialDetailIndex?: number;
  onChangeIndex?(value: { theme: number; detail: number }): void;
}

export type { ThemeSelectorProps };
