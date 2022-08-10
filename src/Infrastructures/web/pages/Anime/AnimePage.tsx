import React, { useContext, useEffect } from 'react';
import { iAnimed } from '../../../../Domains/animes/entities/Anime';
import AnimeList from '../../../../Interface/web/components/Anime/AnimeList';
import AnimesAction from '../../../../Interface/web/controllers/Animes';
import CollectionAction from '../../../../Interface/web/controllers/Collection';
import AnimesUseState from '../../../../Interface/web/models/Animes';
import CollectionChartUseState from '../../../../Interface/web/models/CollectionChart';
import ContainerContex from '../../../store/ContainerContex';

export default function AnimePage() {
  const [animes, setAnimes] = AnimesUseState();
  const [collectionChart, setAnimeToCollection] = CollectionChartUseState();
  const { getAnimesUseCase, collectionUseCase, setDispatcher } = useContext(ContainerContex);
  const { addAnimeToCollectionAction } = CollectionAction(
    collectionUseCase,
    setAnimeToCollection,
    setDispatcher,
  );
  const addAnimeCollectionHandler = (data: iAnimed) => {
    addAnimeToCollectionAction(data);
  };
  console.log(collectionChart);
  useEffect(() => {
    animes.isLoading && AnimesAction(getAnimesUseCase, setAnimes, setDispatcher);
  }, [animes.isLoading]);
  return animes.isLoading ? (
    <h1>loading</h1>
  ) : (
    <AnimeList addAnimeToCollection={addAnimeCollectionHandler} animes={animes.data} />
  );
}
