import { css } from '@emotion/react';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function Content({ children }: Props) {
  return (
    <div
      css={css`
        margin: 0 auto;
        min-height: 100%;
      `}
    >
      {children}
    </div>
  );
}
