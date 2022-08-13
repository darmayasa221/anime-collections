/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';
import Content from '../UI/Content';
import Collection from './Collection';
import { iCollections } from '../../../../Domains/collections/entities/Collections';

type props = iCollections;

const CollectionsWrap = styled('div')({
  // display: 'grid',
  // gridTemplateColumns: '1fr',
  // gap: '16px',
  // margin: '32px 0',
  // '@media screen and (min-width: 650px)': {
  //   gridTemplateColumns: '1fr 1fr',
  //   margin: '20px 0',
  //   fontSize: '18px',
  // },
  // '@media screen and (min-width: 850px)': {
  //   gridTemplateColumns: 'repeat(3, 1fr)',
  // },
  // '@media screen and (min-width: 1200px)': {
  //   gridTemplateColumns: 'repeat(4, 1fr)',
  // },
  // '@media screen and (min-width: 1600px)': {
  //   gridTemplateColumns: 'repeat(5, 1fr)',
  // },
});

export default function CollectionList({ collections }: props) {
  return (
    <Content>
      <CollectionsWrap>
        {collections.map((animeCollection) => (
          <Collection
            key={animeCollection.nameCollection}
            animeCollection={animeCollection.animeCollection}
            nameCollection={animeCollection.nameCollection}
          />
        ))}
      </CollectionsWrap>
    </Content>
  );
}
