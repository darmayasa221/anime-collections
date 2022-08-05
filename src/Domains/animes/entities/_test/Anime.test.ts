import Anime from '../Anime';

describe('anime entities', () => {
  it('should create anime correctly', () => {
    // Arrange
    const payload = {
      id: '1',
      coverImage: {
        color: 'color',
        size: {
          extraLarge: 'xl',
          large: 'large',
          medium: 'medium',
        },
      },
      title: {
        one: 'one',
      },
    };
    // Action
    const anime = new Anime(payload);
    // Assert
    expect(anime.id).toEqual(payload.id);
    expect(anime.coverImage).toEqual(payload.coverImage);
    expect(anime.title).toEqual(payload.title);
  });
});
