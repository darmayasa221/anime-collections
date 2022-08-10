import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

type Props = {
  mode: boolean | number;
};
const Nav = styled('nav')<Props>(
  {
    position: 'fixed',
    bottom: 0,
    background: '#ffffffe8',
    width: '100%',
  },
  ({ mode }) => ({ height: mode ? '92vh' : 0 }),
  {
    transition: 'all 0.5s',
  },
  {
    ul: {
      alignItems: 'center',
      height: '100%',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridColumnGap: '10px',
      textAlign: 'center',
    },
    li: {
      height: '100%',
      display: ' flex',
      fontSize: '22px',
      alignItems: 'center',
      justifyContent: 'center',
      ':hover': { backgroundColor: '#44dc8f', cursor: 'pointer' },
    },
    a: {
      color: 'black',
      textDecoration: 'unset',
      ':active': {
        color: 'white',
      },
    },
    '@media screen and (min-width: 650px)': {
      a: {
        fontSize: '40px',
      },
    },
  },
);

export default function NavBar({ mode }: Props) {
  return (
    <Nav mode={mode ? 1 : 0}>
      <ul>
        <li>
          <NavLink to="/">Animes</NavLink>
        </li>
        <li>
          <NavLink to="/collection">Anime Collections</NavLink>
        </li>
      </ul>
    </Nav>
  );
}
