import AnimeRepository from '../AnimeRepository';

describe('AnimeRepository', () => {
  it('should throw error when invoke abstract behavior', async () => {
    // Arrange
    class DummyRepository extends AnimeRepository {}
    const dumyRepository = new DummyRepository();
    // Action and Assert
    await expect(dumyRepository.getAnimes()).rejects.toThrowError(
      'ANIME_REPOSITORY.METHOD_NOT_IMPLEMENTED'
    );
    await expect(dumyRepository.getAnimeById(1)).rejects.toThrowError(
      'ANIME_REPOSITORY.METHOD_NOT_IMPLEMENTED'
    );
  });
});
