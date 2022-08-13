/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';
import { iAnimed } from '../../../../Domains/animes/entities/Anime';
import Content from '../UI/Content';
import Anime from './Anime';

type props = {
  animes: Array<iAnimed>;
  addAnimeToCollection?(data: iAnimed) :void
};

const AnimesWrap = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '24px',
  margin: '32px 0',
  '@media screen and (min-width: 650px)': {
    gridTemplateColumns: '1fr 1fr',
    margin: '20px 0',
  },
  '@media screen and (min-width: 850px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    fontSize: '18px',
  },
  '@media screen and (min-width: 1200px)': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  '@media screen and (min-width: 1600px)': {
    gridTemplateColumns: 'repeat(5, 1fr)',
  },
});

export default function AnimeList({ animes, addAnimeToCollection }: props) {
  return (
    <Content>
      <h2>Anime Collections</h2>
      <AnimesWrap>
        {animes.map((anime) => (
          <Anime addAnimeToCollection={addAnimeToCollection} key={anime.id} anime={anime} />
        ))}
      </AnimesWrap>
    </Content>
  );
}
