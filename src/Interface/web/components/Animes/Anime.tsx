/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { iAnimed } from '../../../../Domains/animes/entities/Anime';
import AnimeTitle from './AnimeTitle';

type Props = {
  anime: iAnimed;
};

const TitleWrap = styled('div')`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 10px;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

export default function Anime({ anime }: Props) {
  const titleKey = Object.keys(anime.title);

  return (
    <NavLink
      to={`/animes/${anime.id}`}
      css={css`
        width: 100%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        background-color: white;
        border-radius: 8px;
        overflow: hidden;
        display: block;
        color: black;
        text-decoration: unset;
        border: solid 5px ${anime.coverImage.color};
        transition: all 0.2s;
        &:hover {
          transform: scale(1.1);
          transition: all 0.2s;
        }
      `}
    >
      <div>
        <img
          css={css`
            width: 100%;
          `}
          src={anime.coverImage.size.extraLarge}
          alt={anime.title.native}
        />
      </div>
      <div
        css={css`
          padding: 0 16px 16px 16px;
        `}
      >
        <h1>Title</h1>
        <TitleWrap>
          {titleKey.map((title) => (
            <AnimeTitle
              key={title}
              title={title}
              titleDescription={anime.title[title]}
            />
          ))}
        </TitleWrap>
      </div>
    </NavLink>
  );
}
