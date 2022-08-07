import { useContext, useState, useEffect } from 'react';
import { iAnimedDetail } from '../../../../Domains/animes/entities/AnimeDetail';
import ContainerContex from '../../store/container-contex';

type uAnimeDetailState = {
  loading: boolean;
  data: iAnimedDetail;
};
const AnimeDetailState = () => {
  const { getAnimeDetailUseCase } = useContext(ContainerContex);
  const [animeDetail, setAnimeDetail] = useState<uAnimeDetailState>({
    loading: true,
    data: {} as any,
  });
  useEffect(() => {
    if (!animeDetail.data.title) {
      setAnimeDetail((prev) => ({
        ...prev,
        loading: true,
      }));
    } else {
      setAnimeDetail((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  }, [animeDetail.data]);
  const animeDetailHandler = async (id: number) => {
    const newAnimeDetail = await getAnimeDetailUseCase.execute(id);
    setAnimeDetail((prev) => ({
      ...prev,
      loading: false,
      data: { ...newAnimeDetail },
    }));
  };

  return [animeDetail, animeDetailHandler] as const;
};

export default AnimeDetailState;
