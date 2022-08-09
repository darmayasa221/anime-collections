import AnimeRepository from '../../../Domains/animes/AnimeRepository';
import AnimeDetail from '../../../Domains/animes/entities/AnimeDetail';
import Animes from '../../../Domains/animes/entities/Animes';
import { apolloClient, gql } from '../../api/apollo/ApolloClient';

export default class AnimeRepositoryApollo extends AnimeRepository {
  private client: typeof apolloClient;

  private gqlQuery: typeof gql;

  constructor(client: typeof apolloClient, gqlQuery: typeof gql) {
    super();
    this.client = client;
    this.gqlQuery = gqlQuery;
  }

  async getAnimes(): Promise<any> {
    const { data, error } = await this.client.query({
      query: this.gqlQuery(`
       {
        Page(perPage: 10) {
           media {
            id
            title {
              romaji
              english
              native
              userPreferred
            }
            coverImage {
              color
              extraLarge
              large
              medium
              color
            }
          }
        }
      }
      `),
    });
    if (error) {
      throw new Error(error.message);
    }
    return new Animes(data.Page);
  }

  async getAnimeById(id: number): Promise<any> {
    if (typeof id !== 'number') {
      throw new Error('id not found');
    }
    const { data, error, networkStatus } = await this.client.query({
      query: this.gqlQuery(`
      query anime($id:Int){
        Media(id: $id, type: ANIME) {
          id
          coverImage {
            extraLarge
            large
            medium
            color
          }
          title {
            romaji
            english
            native
            userPreferred
          }
          bannerImage
          description
          episodes
          genres
          averageScore
        }
      }
      `),
      variables: { id },
    });
    if (error) {
      throw new Error(error.message);
    }
    return new AnimeDetail(data.Media);
  }
}
