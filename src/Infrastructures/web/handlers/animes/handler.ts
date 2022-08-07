import { useEffect, useState, useContext } from 'react';
import { iAnimed } from '../../../../Domains/animes/entities/Anime';
import ContainerContex from '../../store/container-contex';

type uAnimesState = {
  loading: Boolean;
  data: Array<iAnimed>;
};
const AnimesState = () => {
  const { getAnimesUseCase } = useContext(ContainerContex);
  const [animes, setAnime] = useState<uAnimesState>({
    loading: true,
    data: [],
  });
  useEffect(() => {
    if (animes.data.length < 1) {
      setAnime((prev) => ({
        ...prev,
        loading: true,
      }));
    } else {
      setAnime((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  }, [animes.data]);
  const animesHandler = async () => {
    const dataAnimes = await getAnimesUseCase.execute();
    setAnime((prev) => ({
      ...prev,
      data: dataAnimes.data,
    }));
  };
  return [animes, animesHandler] as const;
};

export default AnimesState;
