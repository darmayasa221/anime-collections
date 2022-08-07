import React, { useEffect } from 'react';
import Animes from '../../../../Interface/web/components/Animes/Animes';
import Loading from '../../../../Interface/web/components/UI/Loading';
import AnimesState from '../../handlers/animes/handler';

export default function Dashboard() {
  const [animes, animesHandler] = AnimesState();
  useEffect(() => {
    animes.loading && animesHandler();
  }, [animes.loading]);
  return animes.loading ? <Loading /> : <Animes animes={animes.data} />;
}
