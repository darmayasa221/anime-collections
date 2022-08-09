/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { iAnimed } from '../../../../Domains/animes/entities/Anime';

export type animesInitialStateType = {
  isLoading: boolean;
  data: Array<iAnimed>;
};
export type setAnimesDispatchType = (
  callback: (prev: animesInitialStateType) => animesInitialStateType
) => void;

const AnimesUseState = () => {
  const [animes, setAnimes] = useState<animesInitialStateType>({
    isLoading: true,
    data: {} as any,
  });
  return [animes, setAnimes] as const;
};

export default AnimesUseState;
