/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';
import Content from '../UI/Content';
import Collection, { PropsCollections } from './Collection';
import { iCollections } from '../../../../Domains/collections/entities/Collections';

interface props extends iCollections, Pick<PropsCollections, 'type'>{}
const CollectionsWrap = styled('div')<Pick<PropsCollections, 'type'>>(
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    gap: '20px',
    margin: '36px 0',
    '@media screen and (min-width: 850px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    '@media screen and (min-width: 1200px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    '@media screen and (min-width: 1600px)': {
      gridTemplateColumns: 'repeat(5, 1fr)',
    },
  },
  (({ type }) => ({
    margin: type === 'addCollectionItem' ? '36px 0' : 'unset',
    padding: type === 'addCollectionItem' ? 'unset' : '10px',
  })),
);

const ContentCollection = styled(Content)({
  paddingTop: '40px',
});

export default function CollectionList({ collections, type }: props) {
  return (
    <ContentCollection>
      <CollectionsWrap type={type}>
        {collections.map((animeCollection) => (
          <Collection
            key={animeCollection.nameCollection}
            animeCollection={animeCollection.animeCollection}
            nameCollection={animeCollection.nameCollection}
            type={type}
          />
        ))}
      </CollectionsWrap>
    </ContentCollection>
  );
}
