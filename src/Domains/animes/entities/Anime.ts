export interface iAnimeCoverImage {
  coverImage: {
    color: string;
    extraLarge: string;
    large: string;
    medium: string;
  };
}
export interface iAnimeTitle {
  title: {
    [keyof: string]: string;
    romaji: string;
    english: string;
    native: string;
    userPreferred: string;
  };
}
export interface iAnime extends iAnimeCoverImage, iAnimeTitle {
  id: number;
}
export interface iAnimed extends Omit<iAnime, 'coverImage'> {
  coverImage: {
    color: string;
    size: {
      extraLarge: string;
      large: string;
      medium: string;
    };
  };
}

export default class Anime implements iAnimed {
  public id: number;

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

  constructor(payload: iAnime) {
    const { id, title, coverImage }: iAnimed = this.verifyPayload(payload);
    this.id = id;
    this.coverImage = coverImage;
    this.title = title;
  }

  private verifyPayload(payload: iAnime): iAnimed {
    return {
      id: payload.id,
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
    };
  }
}
