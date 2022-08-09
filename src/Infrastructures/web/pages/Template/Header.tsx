import React, { useState } from 'react';
import styled from '@emotion/styled';
import NavBar from '../../../../Interface/web/components/NavBar/NavBar';
import HumbergerToggel from '../../../../Interface/web/components/UI/HumbergerToggle';

const HeaderApp = styled('header')({
  position: 'sticky',
  top: 0,
  height: '8vh',
  alignItems: 'center',
  backgroundColor: '#44dc8f',
  display: 'flex',
  justifyContent: 'space-evenly',
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
  zIndex: 100,
  h1: {
    color: 'white',
    fontSize: '24px',
  },
  '@media screen and (min-width: 650px)': {
    h1: {
      fontSize: '40px',
    },
  },
});

export default function Header() {
  const [mode, setMode] = useState(false);
  const TogelMenuHandler = () => {
    mode === true ? setMode(false) : setMode(true);
  };
  return (
    <HeaderApp>
      <span>
        <h1>Anime Collection</h1>
      </span>
      <HumbergerToggel TogelMenuHandler={TogelMenuHandler} mode={mode} />
      <NavBar mode={mode} />
    </HeaderApp>
  );
}
