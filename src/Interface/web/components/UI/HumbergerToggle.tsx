/* eslint-disable indent */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import styled from '@emotion/styled';

type props = {
  TogelMenuHandler: () => void;
  mode: boolean | number;
};

const HumbergerToggelWrap = styled('div')<Pick<props, 'mode'>>(
  {
    display: 'flex',
    cursor: 'pointer',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'center',
    height: '20px',
    position: 'absolute',
    right: '8%',
    span: {
      width: '28px',
      height: '3px',
      backgroundColor: 'white',
      transition: 'all 0.2s',
    },
    '@media screen and (min-width: 650px)': {
      gridTemplateColumns: '1fr 1fr',
      height: '25px',
      span: {
        gridTemplateColumns: '1fr 1fr',
        width: '35px',
        height: '4px',
      },
    },
  },
  ({ mode }) =>
    mode
      ? {
          'span:nth-of-type(1)': {
            transformOrigin: '0 0',
            transform: 'rotate(45deg) translate(-1px, -1px)',
          },
          'span:nth-of-type(3)': {
            transformOrigin: '0 100%',
            transform: 'rotate(-45deg) translate(-1px, -1px)',
          },
          'span:nth-of-type(2)': {
            transform: 'scale(0)',
          },
        }
      : ''
);

export default function HumbergerToggel({ TogelMenuHandler, mode }: props) {
  return (
    <HumbergerToggelWrap onClick={TogelMenuHandler} mode={mode ? 1 : 0}>
      <span />
      <span />
      <span />
    </HumbergerToggelWrap>
  );
}
