/* eslint-disable no-unused-vars */
export interface iAnimesRepository {
  getAnimes: () => Promise<any>;
  getAnimeById: (id: number) => Promise<any>;
}
export default abstract class AnimeRepository implements iAnimesRepository {
  async getAnimes(): Promise<Error> {
    throw new Error('ANIME_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async getAnimeById(id: number): Promise<any> {
    throw new Error('ANIME_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}
