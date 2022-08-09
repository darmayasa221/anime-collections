import React, { useContext, useEffect } from 'react';
import AnimeList from '../../../../Interface/web/components/Anime/AnimeList';
import AnimesAction from '../../../../Interface/web/controllers/Animes';
import AnimesUseState from '../../../../Interface/web/models/Animes';
import ContainerContex from '../../../store/ContainerContex';

export default function AnimePage() {
  const [animes, setAnimes] = AnimesUseState();
  const { getAnimesUseCase, setDispatcher } = useContext(ContainerContex);
  useEffect(() => {
    animes.isLoading && AnimesAction(getAnimesUseCase, setAnimes, setDispatcher);
  }, [animes.isLoading]);
  return animes.isLoading ? (
    <h1>loading</h1>
  ) : (
    <AnimeList animes={animes.data} />
  );
}
