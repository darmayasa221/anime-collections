import Anime, { iAnime, iAnimed } from './Anime';

export interface iAnimes {
  media: Array<iAnime>;
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

  private verifyPayload({ media }: iAnimes): Array<iAnimed> {
    const newAnimes: Array<iAnimed> = media.map<iAnimed>((anime) => ({
      ...new Anime(anime),
    }));
    return newAnimes;
  }
}
