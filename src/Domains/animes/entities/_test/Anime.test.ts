import Anime from '../Anime';

describe('anime entities', () => {
  it('should create anime correctly', () => {
    // Arrange
    const payload = {
      id: 1,
      title: {
        romaji: 'Cowboy Bebop',
        english: 'Cowboy Bebop',
        native: 'カウボーイビバップ',
        userPreferred: 'Cowboy Bebop',
      },
      coverImage: {
        color: '#f1785d',
        extraLarge:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-CXtrrkMpJ8Zq.png',
        large:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
        medium:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1-CXtrrkMpJ8Zq.png',
      },
    };
    const expectedPayload = {
      id: 1,
      title: {
        romaji: 'Cowboy Bebop',
        english: 'Cowboy Bebop',
        native: 'カウボーイビバップ',
        userPreferred: 'Cowboy Bebop',
      },
      coverImage: {
        color: '#f1785d',
        size: {
          extraLarge:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-CXtrrkMpJ8Zq.png',
          large:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1-CXtrrkMpJ8Zq.png',
        },
      },
    };
    // Action
    const anime = new Anime(payload);
    // Assert
    expect({ ...anime }).toStrictEqual(expectedPayload);
  });
  it('should create default value if payload did not contain property', () => {
    // Arrange
    const payload = {
      id: 1,
      title: {
        romaji: null,
        english: 'Cowboy Bebop',
        native: 'カウボーイビバップ',
        userPreferred: 'Cowboy Bebop',
      },
      coverImage: {
        color: null,
        extraLarge:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-CXtrrkMpJ8Zq.png',
        large:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
        medium:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1-CXtrrkMpJ8Zq.png',
      },
    };
    const expectedPayload = {
      id: 1,
      coverImage: {
        color: 'white',
        size: {
          extraLarge:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-CXtrrkMpJ8Zq.png',
          large:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1-CXtrrkMpJ8Zq.png',
        },
      },
      title: {
        romaji: 'not available',
        english: 'Cowboy Bebop',
        native: 'カウボーイビバップ',
        userPreferred: 'Cowboy Bebop',
      },
    };
    // Action
    const anime = new Anime(payload as any);
    // Assert
    expect({ ...anime }).toStrictEqual(expectedPayload);
    expect(anime.title.romaji).toEqual(expectedPayload.title.romaji);
    expect(anime.coverImage.color).toEqual(expectedPayload.coverImage.color);
  });
});
