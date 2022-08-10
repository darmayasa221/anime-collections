import { useState } from 'react';
import { iAnimed } from '../../../../Domains/animes/entities/Anime';

export type collectionChartInitialState = Array<iAnimed>
export type setAnimesToCollectionDispatchType = (
  callback: (prev: collectionChartInitialState) => collectionChartInitialState
) => void;
const CollectionChartUseState = () => {
  const [collectionChart, setAnimeToCollection] = useState<collectionChartInitialState>([]);
  return [collectionChart, setAnimeToCollection] as const;
};
export default CollectionChartUseState;
