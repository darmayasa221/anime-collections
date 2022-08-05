import AnimeDetail from '../AnimeDetail';

describe('AnimeDetail Entities', () => {
  it('should create AnimeDetail Correctly', () => {
    // Arrange
    const payload = {
      id: 'id',
      bannerImage: 'banner',
      title: {
        one: 'one',
      },
      description: 'desscription',
      episodes: '2',
      genres: ['Action', 'Adventure', 'Drama', 'Sci-Fi'],
    };
    // Action
    const animeDetail = new AnimeDetail(payload);
    // Assert
    expect(animeDetail.id).toEqual(payload.id);
    expect(animeDetail.bannerImage).toEqual(payload.bannerImage);
    expect(animeDetail.title).toEqual(payload.title);
    expect(animeDetail.description).toEqual(payload.description);
    expect(animeDetail.episodes).toEqual(payload.episodes);
    expect(animeDetail.genres).toEqual(payload.genres);
  });
});
