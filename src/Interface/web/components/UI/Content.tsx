/* eslint-disable react/require-default-props */
import { css } from '@emotion/react';
import React, { ReactNode } from 'react';

type props = {
  children: ReactNode;
  className?: string;
};
export default function Content({ children, className }: props) {
  return (
    <div
      className={className}
      css={css({
        margin: '0 auto',
        minHeight: '100%',
      })}
    >
      {children}
    </div>
  );
}
