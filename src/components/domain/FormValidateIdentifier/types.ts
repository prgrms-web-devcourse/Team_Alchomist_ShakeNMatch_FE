import type { HTMLAttributes } from 'react';

interface FormValidateIdentifierProps extends HTMLAttributes<HTMLDivElement> {
  totalTasksToDone: number;
  tasksDone: number;
  width: string;
  height: string;
}

interface GlassProps {
  currentNum: number;
  fulfilledNum: number;
  height: string;
  width: string;
}

interface GageProps extends GlassProps {
  currentNum: number;
  fulfilledNum: number;
}

export type { FormValidateIdentifierProps, GlassProps, GageProps };
