/* istanbul ignore file */
import {
  apolloClient,
  gql,
} from '../src/Infrastructures/api/apollo/ApolloClient';

const AnimeGqlTestHelper = {
  async getAnimes() {
    const { data } = await apolloClient.query({
      query: gql(`
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
  },
  async getAnime(id = 1) {
    const { data } = await apolloClient.query({
      query: gql(`
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
    return data;
  },
};

export default AnimeGqlTestHelper;
