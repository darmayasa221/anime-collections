/* eslint-disable react/require-default-props */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { iAnimed } from '../../../../Domains/animes/entities/Anime';
import AnimeTitle from './AnimeTitle';
import Button from '../UI/ButtonAdd';

type props = {
  anime: iAnimed;
    addAnimeToCollection?(data: iAnimed) :void;
};

const animeNavLink = css({
  position: 'relative',
  width: '100%',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  backgroundColor: 'white',
  borderRadius: '8px',
  overflow: 'hidden',
  display: 'block',
  color: 'black',
  textDecoration: 'unset',
  transition: 'all 0.2s',
  ':hover': {
    transform: 'scale(1.1)',
    transition: 'all 0.2s',
  },
});
const TitleWrap = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gridColumnGap: '10px',
  p: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
  },
});
const AnimeCoverImageWrap = styled('div')({
  img: {
    width: '100%',
  },
});

export default function Anime({ anime, addAnimeToCollection }: props) {
  const titleKey = Object.keys(anime.title);
  return (
    <NavLink
      to={`/animes/${anime.id}`}
      css={css`
        ${animeNavLink}
        border: solid 5px ${anime.coverImage.color};
      `}
    >
      <AnimeCoverImageWrap>
        <Button text="" handlerData={addAnimeToCollection} anime={anime} />
        <img src={anime.coverImage.size.extraLarge} alt={anime.title.native} />
      </AnimeCoverImageWrap>
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
