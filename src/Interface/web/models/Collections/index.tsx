import { useState } from 'react';
import { iCollections } from '../../../../Domains/collections/entities/Collections';

export type collectionsInitialState = iCollections
export type setCollectionsDispatchType = (
  callback: (prev: collectionsInitialState) => collectionsInitialState
) => void;
const CollectionsUseState = () => {
  const [collections, setCollections] = useState<collectionsInitialState>({
    collections: [],
  });
  return [collections, setCollections] as const;
};

export default CollectionsUseState;
