import AnimesRepository from '../../Domains/animes/AnimesRepository';
import { apolloClient, gql } from '../api/apollo/ApolloClient';

export default class AnimesRepositoryGql extends AnimesRepository {
  private client: typeof apolloClient;

  private gqlQuery: typeof gql;

  constructor(client: typeof apolloClient, gqlQuery: typeof gql) {
    super();
    this.client = client;
    this.gqlQuery = gqlQuery;
  }

  async getAnimes(): Promise<any> {
    const { data } = await this.client.query({
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
    return data;
  }

  async getAnime(id: number): Promise<any> {
    const { data, error } = await this.client.query({
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
    return data;
  }
}
