/* eslint-disable no-unused-vars */
import { iAnimedDetail } from '../../Domains/animes/entities/AnimeDetail';
import { iAnimesed } from '../../Domains/animes/entities/Animes';

export interface iDispatcherAnime {
  setAnimeDetail(payload: iAnimedDetail): void;
  setAnimes(payload: iAnimesed): void;
}
export default abstract class DispatcherAnime implements iDispatcherAnime {
  setAnimeDetail(payload: iAnimedDetail): any {
    throw new Error('DISPATCHER_ANIME.METHOD_NOT_IMPLEMENTED');
  }

  setAnimes(payload: iAnimesed): any {
    throw new Error('DISPATCHER_ANIME.METHOD_NOT_IMPLEMENTED');
  }
}
