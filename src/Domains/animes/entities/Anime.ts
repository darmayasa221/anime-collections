interface iAnime {
  id: string;
  coverImage: {
    color: string;
    size: {
      extraLarge: string;
      large: string;
      medium: string;
    };
  };
  title: object;
}

export default class Anime implements iAnime {
  public id: string;

  public coverImage: {
    color: string;
    size: { extraLarge: string; large: string; medium: string };
  };

  public title: object;

  constructor(payload: iAnime) {
    this.id = payload.id;
    this.coverImage = payload.coverImage;
    this.title = payload.title;
  }
}
