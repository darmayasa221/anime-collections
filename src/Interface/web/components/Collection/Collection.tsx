/* eslint-disable react/require-default-props */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { iCollectionItem } from '../../../../Domains/collections/entities/CollectionItem';

type props = iCollectionItem

const collectionNavLink = css({
  width: '100%',
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
  overflow: 'hidden',
  position: 'relative',
  img: {
    width: '105%',
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
      <div>
        <button>delete</button>
        <button>edit</button>
      </div>
    </NavLink>
  );
}
{ /* <NavLink
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
    </NavLink> */ }
