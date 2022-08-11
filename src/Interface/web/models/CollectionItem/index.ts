import { useState } from 'react';
import { iCollectionItem } from '../../../../Domains/collections/entities/CollectionItem';

export type collectionItemInitialState = iCollectionItem
export type setCollectionItemDispatchType = (
  callback: (prev: collectionItemInitialState) => collectionItemInitialState
) => void;
const CollectionItemUseState = () => {
  const [collectionItem, setCollectionItem] = useState<collectionItemInitialState>({
    nameCollection: '',
    animeCollection: [],
  });
  return [collectionItem, setCollectionItem] as const;
};
export default CollectionItemUseState;
