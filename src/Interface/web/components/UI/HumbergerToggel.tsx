import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

type Props = {
  TogelMenuHandler: () => void;
  mode: Boolean;
};

const HumbergerToggelWrap = styled('div')`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  height: 20px;
  position: absolute;
  right: 8%;
  @media screen and (min-width: 650px) {
    grid-template-columns: 1fr 1fr;
    height: 25px;
  }
`;

const HumbergerSpan = styled('span')`
  width: 28px;
  height: 3px;
  background-color: white;
  transition: all 0.2s;
  @media screen and (min-width: 650px) {
    grid-template-columns: 1fr 1fr;
    width: 35px;
    height: 4px;
  }
`;

const HumbergerMode = `
span:nth-of-type(1) {
  transform-origin: 0 0;
  transform: rotate(45deg) translate(-1px, -1px);
}
span:nth-of-type(3) {
  transform-origin: 0 100%;
  transform: rotate(-45deg) translate(-1px, 0px);
}
span:nth-of-type(2) {
  background-color: white;
  transform: scale(0);
}`;

export default function HumbergerToggel({ TogelMenuHandler, mode }: Props) {
  return (
    <HumbergerToggelWrap
      onClick={TogelMenuHandler}
      css={css`
        ${mode === true ? HumbergerMode : ''}
      `}
    >
      <HumbergerSpan />
      <HumbergerSpan />
      <HumbergerSpan />
    </HumbergerToggelWrap>
  );
}
