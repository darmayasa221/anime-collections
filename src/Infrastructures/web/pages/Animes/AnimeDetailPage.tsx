import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AnimeDetail from '../../../../Interface/web/components/Animes/AnimeDetail';
import Loading from '../../../../Interface/web/components/UI/Loading';
import AnimeDetailActions from '../../../../Interface/web/controllers/animes/AnimeDetailActions';
import AnimeDetailState from '../../../../Interface/web/model/animes/AnimeDetailState';
import ContainerContex from '../../store/container-contex';

export default function AnimeDetailPage() {
  const { id } = useParams();
  const [animeDetail, setAnimeDetail] = AnimeDetailState();
  const { getAnimeDetailUseCase } = useContext(ContainerContex);

  useEffect(() => {
    if (animeDetail.loading) {
      AnimeDetailActions(id, getAnimeDetailUseCase, setAnimeDetail);
    }
  }, [animeDetail.loading]);

  return animeDetail.loading ? (
    <Loading />
  ) : (
    <AnimeDetail animeDetail={animeDetail.data} />
  );
}
