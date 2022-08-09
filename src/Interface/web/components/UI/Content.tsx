import { css } from '@emotion/react';
import React, { ReactNode } from 'react';

type props = {
  children: ReactNode;
};
export default function Content({ children }: props) {
  return (
    <div
      css={css({
        margin: '0 auto',
        minHeight: '100%',
      })}
    >
      {children}
    </div>
  );
}
