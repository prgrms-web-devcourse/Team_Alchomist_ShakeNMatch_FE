interface RatingStarProps {
  mode: 'show' | 'edit';
  maxRate?: number;
  rateTobeDisplayed?: number;
  onRateChange?(userRate: number): void;
}

export type { RatingStarProps };
