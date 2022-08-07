import { useState } from 'react';
import { iAnimedDetail } from '../../../../Domains/animes/entities/AnimeDetail';

type uAnimeDetailState = {
  loading: boolean;
  data: iAnimedDetail;
};
export default function AnimeDetailState() {
  const [animeDetail, setAnimeDetail] = useState<uAnimeDetailState>({
    loading: true,
    data: {} as any,
  });
  return [animeDetail, setAnimeDetail] as const;
}
