import React from 'react';
import styled from '@emotion/styled';
import { iAnimed } from '../../../../Domains/animes/entities/Anime';
import Content from '../UI/Content';
import Anime from './Anime';

type Props = {
  animes: Array<iAnimed>;
};
const AnimesWrap = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 32px 0;
  @media screen and (min-width: 650px) {
    grid-template-columns: 1fr 1fr;
    margin: 20px 0;
    font-size: 18px;
  }
  @media screen and (min-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1600px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export default function Animes({ animes }: Props) {
  return (
    <Content>
      <h2>Anime Collections</h2>
      <AnimesWrap>
        {animes.map((anime) => (
          <Anime key={anime.id} anime={anime} />
        ))}
      </AnimesWrap>
    </Content>
  );
}
