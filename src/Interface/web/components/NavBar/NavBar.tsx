import React from 'react';
import { NavLink } from 'react-router-dom';
import { css } from '@emotion/react';

type Props = {
  mode: Boolean;
};
const NavUl = `
  ul {
    align-items: center;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    text-align: center;
  }
  li {
    height: 100%;
    display: flex;
    font-size: 22px;
    align-items: center;
    justify-content: center;
  }
  li:hover {
    background-color: #44dc8f;
    cursor: pointer;
  }
  a {
    color: black;
    text-decoration: unset;
  }
  a:active {
    color: white;
  }
  @media screen and (min-width: 650px) {
    a {
    font-size: 40px
    }
  }
  
`;
const NavModeTrue = `
    position: fixed;
    bottom: 0;
    background: #ffffffe8;
    width: 100%;
    height: 92vh;
    transition: all 0.5s;
`;
const NavModeFalse = `  
  position: fixed;
  bottom: 0;
  background: #ffffffe8;
  width: 100%;
  height: 0;
  transition: all 0.5s;
`;

export default function NavBar({ mode }: Props) {
  return (
    <nav
      css={css`${NavUl}
        ${mode === true ? NavModeTrue : NavModeFalse}
        };
      `}
    >
      <ul>
        <li>
          <NavLink to="/">Animes</NavLink>
        </li>
        <li>
          <NavLink to="/">Anime Collections</NavLink>
        </li>
      </ul>
    </nav>
  );
}
