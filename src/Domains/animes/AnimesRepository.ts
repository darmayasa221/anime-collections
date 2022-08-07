/* eslint-disable no-unused-vars */
export interface iAnimesRepository {
  getAnimes: () => Promise<any>;
  getAnime: (id: number) => Promise<any>;
}

export default class AnimesRepository implements iAnimesRepository {
  async getAnimes(): Promise<Error> {
    throw new Error('Method Not Implemented');
  }

  async getAnime(id: number): Promise<Error> {
    throw new Error('Method Not Implemented');
  }
}
