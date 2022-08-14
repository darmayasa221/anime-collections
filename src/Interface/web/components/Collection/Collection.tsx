/* eslint-disable react/require-default-props */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { iCollectionItem } from '../../../../Domains/collections/entities/CollectionItem';
import defaultCover from '../../assert/default.png';
import Button from '../UI/Button';

export interface PropsCollections extends iCollectionItem {
  type: 'addAnimeToCollection' | 'addCollectionItem'
}

const collectionNavLink = css({
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  backgroundColor: 'white',
  borderRadius: '8px',
  overflow: 'hidden',
  color: 'black',
  textDecoration: 'unset',
  transition: 'all 0.2s',
  ':hover': {
    zIndex: 2,
    transform: 'scale(1.1)',
    transition: 'all 0.2s',
  },
});
const TitleWrap = styled('div')({
  height: '38px',
  padding: '0 5px',
  h1: {
    fontSize: '20px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
  },
  '@media screen and (min-width: 650px)': {
    h1: {
      fontSize: '30px',
    },
  },
});
const CollectionCoverImageWrap = styled('div')({
  overflow: 'hidden',
  position: 'relative',
  img: {
    width: '100%',
  },
});
const ButtonWrap = styled('div')<Pick<PropsCollections, 'type'>>(
  {
    gridTemplateColumns: 'repeat(2,1fr)',
    height: '30px',
    gap: '5px',
    padding: '2px 5px',
    position: 'relative',
  },
  ({ type }) => ({ display: type === 'addCollectionItem' ? 'grid' : 'none' }),
);

export default function Collection({ animeCollection, nameCollection, type }: PropsCollections) {
  return (
    <NavLink
      to={`/collection/${nameCollection}`}
      css={css`
        ${collectionNavLink}
        border: solid 5px;
      `}
    >
      <CollectionCoverImageWrap>
        {/* <img
          src={animeCollection[0].coverImage.size.extraLarge || ''}
          alt={animeCollection[0].title.native || 'default'}
        /> */}
        <img
          src={defaultCover}
          alt=""
        />
      </CollectionCoverImageWrap>
      <TitleWrap>
        <h1>{nameCollection}</h1>
      </TitleWrap>
      <ButtonWrap type={type}>
        <Button type="submit" text="Remove" />
        <Button type="submit" text="Edit" />
      </ButtonWrap>
    </NavLink>
  );
}
