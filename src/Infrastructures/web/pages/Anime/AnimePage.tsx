import React, { useContext, useEffect } from 'react';
import { iAnimed } from '../../../../Domains/animes/entities/Anime';
import AnimeList from '../../../../Interface/web/components/Anime/AnimeList';
import AnimesAction from '../../../../Interface/web/controllers/Animes';
import CollectionAction from '../../../../Interface/web/controllers/CollectionItem';
import AnimesUseState from '../../../../Interface/web/models/Animes';
import CollectionItemUseState from '../../../../Interface/web/models/CollectionItem';
import ContainerContex from '../../../store/ContainerContex';

export default function AnimePage() {
  const [animes, setAnimes] = AnimesUseState();
  const [_, setCollectionItem] = CollectionItemUseState();
  const { getAnimesUseCase, collectionUseCase, setDispatcher } = useContext(ContainerContex);
  const { addCollectionItem } = CollectionAction(
    collectionUseCase,
    setCollectionItem,
    setDispatcher,
  );
  const addAnimeCollectionHandler = (data: iAnimed) => {
    addCollectionItem(data);
  };
  useEffect(() => {
    animes.isLoading && AnimesAction(getAnimesUseCase, setAnimes, setDispatcher);
  }, [animes.isLoading]);
  return animes.isLoading ? (
    <h1>loading</h1>
  ) : (
    <AnimeList addAnimeToCollection={addAnimeCollectionHandler} animes={animes.data} />
  );
}
