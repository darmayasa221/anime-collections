interface iAnimeDetail {
  id: string;
  bannerImage: string;
  title: object;
  description: string;
  episodes: string;
  genres: Array<string>;
}
export default class AnimeDetail implements iAnimeDetail {
  public id: string;

  public bannerImage: string;

  public title: object;

  public description: string;

  public episodes: string;

  public genres: string[];

  constructor(payload: iAnimeDetail) {
    this.id = payload.id;
    this.bannerImage = payload.bannerImage;
    this.title = payload.title;
    this.description = payload.description;
    this.episodes = payload.episodes;
    this.genres = payload.genres;
  }
}
