export type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonSizeType = Extract<SizeType, 'sm' | 'md' | 'lg'>;

export type ButtonColorType = 'dark' | 'default' | 'light';
