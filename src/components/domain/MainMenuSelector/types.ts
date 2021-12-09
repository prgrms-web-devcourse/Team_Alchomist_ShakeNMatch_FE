interface StyledMenuContainerProps {
  selected: boolean;
}

interface MainMenuSelectorProps {
  selectedMenu?: 'theme' | 'jango' | null;
  onMenuSelected?(value: 'theme' | 'jango'): void;
}

export type { StyledMenuContainerProps, MainMenuSelectorProps };
