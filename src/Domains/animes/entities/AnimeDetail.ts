import { iAnime, iAnimed } from './Anime';

export interface iAnimeBannerImage {
  bannerImage: string;
}
export interface iAnimeGenres {
  genres: Array<string>;
}
export interface iAnimeAverageScore {
  averageScore: number;
}
export interface iAnimeDetail
  extends iAnime,
    iAnimeGenres,
    iAnimeAverageScore,
    iAnimeBannerImage {
  description: string;
  episodes: number;
}
export interface iAnimedDetail
  extends iAnimed,
    iAnimeGenres,
    iAnimeBannerImage,
    iAnimeAverageScore {
  description: string;
  episodes: number;
}

export default class AnimeDetail implements iAnimedDetail {
  public id: number;

  public bannerImage: string;

  public coverImage: {
    color: string;
    size: { extraLarge: string; large: string; medium: string };
  };

  public title: {
    romaji: string;
    english: string;
    native: string;
    userPreferred: string;
  };

  public genres: Array<string>;

  public episodes: number;

  public averageScore: number;

  public description: string;

  constructor(payload: iAnimeDetail) {
    const {
      id,
      coverImage,
      title,
      genres,
      episodes,
      averageScore,
      bannerImage,
      description,
    }: iAnimedDetail = this.verifyPayload(payload);
    this.id = id;
    this.bannerImage = bannerImage;
    this.coverImage = coverImage;
    this.title = title;
    this.genres = genres;
    this.averageScore = averageScore;
    this.episodes = episodes;
    this.description = description;
  }

  private verifyPayload(payload: iAnimeDetail): iAnimedDetail {
    return {
      id: payload.id,
      bannerImage: payload.bannerImage,
      coverImage: {
        color: payload.coverImage.color || 'white',
        size: {
          extraLarge: payload.coverImage.extraLarge,
          large: payload.coverImage.large,
          medium: payload.coverImage.medium,
        },
      },
      title: {
        english: payload.title.english || 'not available',
        native: payload.title.native || 'not available',
        romaji: payload.title.romaji || 'not available',
        userPreferred: payload.title.userPreferred || 'not available',
      },
      genres: payload.genres,
      averageScore: payload.averageScore,
      episodes: payload.episodes,
      description: payload.description,
    };
  }
}
