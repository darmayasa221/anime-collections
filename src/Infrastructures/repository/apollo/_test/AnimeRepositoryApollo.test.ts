import AnimeRepositoryApollo from '../AnimeRepositoryApollo';
import { apolloClient, gql } from '../../../api/apollo/ApolloClient';
import AnimeGqlTestHelper from '../../../../../tests/AnimeGqlTestHelper';

describe('AnimeRepositoryApollo', () => {
  describe('getAnimes', () => {
    it('should persist getAnimes and retrun animes correctly', async () => {
      // Arrange
      const animeRepository = new AnimeRepositoryApollo(apolloClient, gql);
      // Action
      const animes = await animeRepository.getAnimes();
      // Assert
      expect(animes).toHaveLength(10);
    });
    it('should throw error when get an error from server', async () => {
      // Arrange
      const animeRepository = new AnimeRepositoryApollo({} as any, gql);
      // action and Assert
      expect(() => animeRepository.getAnimes()).rejects.toThrowError(Error);
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
      expect(animes).toStrictEqual(animeDetail.Media);
    });
    it('should throw error when payload did not a number', async () => {
      const payload = 'string';
      const animeRepository = new AnimeRepositoryApollo(apolloClient, gql);
      // Action and Assert
      expect(() => animeRepository.getAnimeById(payload)).rejects.toThrowError(
        Error
      );
    });
    it('should throw error when get an error from server', async () => {
      // Arrange
      const animeRepository = new AnimeRepositoryApollo({} as any, gql);
      // action and Assert
      expect(() => animeRepository.getAnimeById(1)).rejects.toThrowError(Error);
    });
  });
});
