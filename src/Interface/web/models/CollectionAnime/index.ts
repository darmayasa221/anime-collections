import { useState } from 'react';
import { iAnimed } from '../../../../Domains/animes/entities/Anime';

export type collectionAnimeInitialState = Array<iAnimed>
export type setAnimesToCollectionDispatchType = (
  callback: (prev: collectionAnimeInitialState) => collectionAnimeInitialState
) => void;
const CollectionAnimeUseState = () => {
  const [collectionAnime, setAnimeToCollection] = useState<collectionAnimeInitialState>([]);
  return [collectionAnime, setAnimeToCollection] as const;
};
export default CollectionAnimeUseState;
