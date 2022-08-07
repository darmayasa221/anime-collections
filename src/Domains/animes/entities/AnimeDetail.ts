/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
import { iAnime, iAnimed } from './Anime';

export interface iAnimeBannerImage {
  bannerImage: string;
}
export interface iAnimeGenres {
  genres: Array<string>;
}
export interface iAnimeRating {
  averageScore: number;
}
export interface iAnimeDetail
  extends iAnime,
    iAnimeGenres,
    iAnimeRating,
    iAnimeBannerImage {
  description: string;
}
export interface iAnimedDetail
  extends iAnimed,
    iAnimeGenres,
    iAnimeBannerImage,
    Omit<iAnimeRating, 'averageScore'> {
  rating: number;
  description: string;
}
export interface iAnimeDetailPayload {
  Media: iAnimeDetail;
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

  public rating: number;

  public description: string;

  constructor(payload: iAnimeDetailPayload) {
    const {
      id,
      coverImage,
      title,
      genres,
      rating,
      bannerImage,
      description,
    }: iAnimedDetail = this.verifyPayload(payload);
    this.id = id;
    this.bannerImage = bannerImage;
    this.coverImage = coverImage;
    this.title = title;
    this.genres = genres;
    this.rating = rating;
    this.description = description;
  }

  private verifyPayload({ Media }: iAnimeDetailPayload): iAnimedDetail {
    return {
      id: Media.id,
      bannerImage: Media.bannerImage,
      coverImage: {
        color: Media.coverImage.color ? Media.coverImage.color : 'white',
        size: {
          extraLarge: Media.coverImage.extraLarge,
          large: Media.coverImage.large,
          medium: Media.coverImage.medium,
        },
      },
      title: {
        english: Media.title.english,
        native: Media.title.native,
        romaji: Media.title.romaji,
        userPreferred: Media.title.userPreferred,
      },
      genres: Media.genres,
      rating: Media.averageScore,
      description: Media.description,
    };
  }
}
