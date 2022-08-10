import { useState } from 'react';
import { iCollectionItem } from '../../../../Domains/collections/entities/CollectionItem';

export type collectionInitialState = iCollectionItem
export type setCollectionDispatchType = (
  callback: (prev: collectionInitialState) => collectionInitialState
) => void;
const CollectionUseState = () => {
  const [collection, setCollection] = useState<collectionInitialState>({
    nameCollection: '',
    animeCollection: [],
  });
  return [collection, setCollection] as const;
};

export default CollectionUseState;
