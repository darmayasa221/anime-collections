import { iAnimesRepository } from '../../Domains/animes/AnimesRepository';
import AnimeDetail from '../../Domains/animes/entities/AnimeDetail';

export default class GetAnimeDetailUseCase {
  animeRepositoryGql: any;

  animeRepositoryUseState: any;

  constructor(animeRepositoryGql: any, animeRepositoryUseState: any) {
    this.animeRepositoryGql = animeRepositoryGql;
    this.animeRepositoryUseState = animeRepositoryUseState;
  }

  async execute(payload: number, dispath: any) {
    try {
      console.log(1);
      const anime = await this.animeRepositoryGql.getAnime(payload);

      console.log(anime);
      console.log(2);
      const newAnime = new AnimeDetail(anime);
      this.animeRepositoryUseState.setAnimeDetail(newAnime, dispath);
    } catch (error) {
      console.log(error);
    }
  }
}
