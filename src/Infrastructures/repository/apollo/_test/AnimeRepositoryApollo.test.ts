import AnimeRepositoryApollo from '../AnimeRepositoryApollo';
import { apolloClient, gql } from '../../../api/apollo/ApolloClient';
import AnimeGqlTestHelper from '../../../../../tests/AnimeGqlTestHelper';
import AnimeDetail from '../../../../Domains/animes/entities/AnimeDetail';

describe('AnimeRepositoryApollo', () => {
  describe('getAnimes', () => {
    it('should persist getAnimes and retrun animes correctly', async () => {
      // Arrange
      const animeRepository = new AnimeRepositoryApollo(apolloClient, gql);
      // Action
      const { data } = await animeRepository.getAnimes();
      // Assert
      expect(data).toHaveLength(10);
    });
    it('should throw error when get an error from server', async () => {
      // Arrange
      const animeRepository = new AnimeRepositoryApollo({} as any, gql);
      // action and Assert
      expect(() => animeRepository.getAnimes()).rejects.toThrow(Error);
    });
  });
  describe('getAnimeById', () => {
    it('should persist getAnimeById and retrun anime correctly', async () => {
      const payload = 1;
      const animeDetail = await AnimeGqlTestHelper.getAnime(payload);
      const animeRepository = new AnimeRepositoryApollo(apolloClient, gql);
      // Action
      const animes = await animeRepository.getAnimeById(payload);
      // Assert
      expect(animes).toStrictEqual(new AnimeDetail(animeDetail.Media));
    });
    it('should throw error when payload did not a number', async () => {
      const payload = 'string';
      const animeRepository = new AnimeRepositoryApollo(apolloClient, gql);
      // Action and Assert
      expect(() => animeRepository.getAnimeById(payload as any)).rejects.toThrow(Error);
    });
    it('should throw error when get an error from server', async () => {
      // Arrange
      const animeRepository = new AnimeRepositoryApollo({} as any, gql);
      // action and Assert
      expect(() => animeRepository.getAnimeById(1)).rejects.toThrowError(Error);
    });
  });
});
