/* eslint-disable react/require-default-props */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { iCollectionItem } from '../../../../Domains/collections/entities/CollectionItem';

type props = iCollectionItem

const collectionNavLink = css({
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
const CollectionCoverImageWrap = styled('div')({
  img: {
    width: '100%',
  },
});

export default function Collection({ animeCollection, nameCollection }: props) {
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
          src=""
          alt=""
        />
      </CollectionCoverImageWrap>
      <TitleWrap>
        <h1>{nameCollection}</h1>
      </TitleWrap>
    </NavLink>
  );
}
