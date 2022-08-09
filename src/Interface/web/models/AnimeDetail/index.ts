import { useState } from 'react';
import { iAnimedDetail } from '../../../../Domains/animes/entities/AnimeDetail';

export type animeDetailInitialStateType = {
  isLoading: boolean;
  data: iAnimedDetail;
};
export type setAnimeDetailDispatchType = (
  callback: (prev: animeDetailInitialStateType) => animeDetailInitialStateType
) => void;
const AnimeDetailUseState = () => {
  const [animeDetail, setAnimeDetail] = useState<animeDetailInitialStateType>({
    isLoading: true,
    data: {} as any,
  });
  return [animeDetail, setAnimeDetail] as const;
};

export default AnimeDetailUseState;
