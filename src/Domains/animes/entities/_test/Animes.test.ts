import Animes from '../Animes';

describe('Animes Entities', () => {
  it('shuld create Animes correctly', () => {
    // Arrange
    const payload = {
      media: [
        {
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
        },
        {
          id: 5,
          title: {
            romaji: 'Cowboy Bebop: Tengoku no Tobira',
            english: "Cowboy Bebop: The Movie - Knockin' on Heaven's Door",
            native: 'カウボーイビバップ天国の扉',
            userPreferred: 'Cowboy Bebop: Tengoku no Tobira',
          },
          coverImage: {
            color: '#f13500',
            extraLarge:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5-NozHwXWdNLCz.jpg',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5-NozHwXWdNLCz.jpg',
            medium:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx5-NozHwXWdNLCz.jpg',
          },
        },
      ],
    };
    const expectedPayload = {
      data: [
        {
          id: 1,
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
          title: {
            romaji: 'Cowboy Bebop',
            english: 'Cowboy Bebop',
            native: 'カウボーイビバップ',
            userPreferred: 'Cowboy Bebop',
          },
        },
        {
          id: 5,
          coverImage: {
            color: '#f13500',
            size: {
              extraLarge:
                'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5-NozHwXWdNLCz.jpg',
              large:
                'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5-NozHwXWdNLCz.jpg',
              medium:
                'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx5-NozHwXWdNLCz.jpg',
            },
          },
          title: {
            romaji: 'Cowboy Bebop: Tengoku no Tobira',
            english: "Cowboy Bebop: The Movie - Knockin' on Heaven's Door",
            native: 'カウボーイビバップ天国の扉',
            userPreferred: 'Cowboy Bebop: Tengoku no Tobira',
          },
        },
      ],
    };
    // Action
    const animesData = new Animes(payload);
    // Assert
    expect({ ...animesData }).toStrictEqual(expectedPayload);
  });
});
