import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AnimeDetail from '../../../../Interface/web/components/Anime/AnimeDetail';
import AnimeDetailAction from '../../../../Interface/web/controllers/AnimeDetail';
import AnimeDetailUseState from '../../../../Interface/web/models/AnimeDetail';
import ContainerContex from '../../../store/ContainerContex';

export default function AnimeDetailPage() {
  const { id } = useParams();
  const [animeDetail, setAnimeDetail] = AnimeDetailUseState();
  const { getAnimeDetailUseCase, setDispatcher } = useContext(ContainerContex);
  useEffect(() => {
    animeDetail.isLoading &&
      AnimeDetailAction(
        getAnimeDetailUseCase,
        setAnimeDetail,
        setDispatcher,
        Number(id)
      );
  }, [animeDetail.isLoading]);
  return animeDetail.isLoading ? (
    <h1>Loading</h1>
  ) : (
    <AnimeDetail animeDetail={animeDetail.data} />
  );
}
