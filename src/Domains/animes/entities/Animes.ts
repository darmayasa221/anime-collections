/* eslint-disable comma-dangle */
import Anime, { iAnime, iAnimed } from './Anime';

export interface iAnimes {
  Page: {
    media: Array<iAnime>;
  };
}
export interface iAnimesed {
  data: Array<iAnimed>;
}

export default class Animes implements iAnimesed {
  public data: iAnimed[];

  constructor(payload: iAnimes) {
    const newAnimes = this.verifyPayload(payload);
    this.data = newAnimes;
  }

  private verifyPayload({ Page: { media } }: iAnimes): Array<iAnimed> {
    const newAnimes: Array<iAnimed> = media.map<iAnimed>(
      (anime) => new Anime(anime)
    );
    return newAnimes;
  }
}
