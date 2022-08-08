import AnimeDetail from '../AnimeDetail';

describe('AnimeDetail Entities', () => {
  it('should create AnimeDetail Correctly', () => {
    // Arrange
    const payload = {
      id: 5,
      coverImage: {
        extraLarge:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5-NozHwXWdNLCz.jpg',
        large:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5-NozHwXWdNLCz.jpg',
        medium:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx5-NozHwXWdNLCz.jpg',
        color: '#f13500',
      },
      title: {
        romaji: 'Cowboy Bebop: Tengoku no Tobira',
        english: "Cowboy Bebop: The Movie - Knockin' on Heaven's Door",
        native: 'カウボーイビバップ天国の扉',
        userPreferred: 'Cowboy Bebop: Tengoku no Tobira',
      },
      bannerImage:
        'https://s4.anilist.co/file/anilistcdn/media/anime/banner/5-VOcSZFepDDhm.jpg',
      description:
        'As the Cowboy Bebop crew travels the stars, they learn of the largest bounty yet, a huge 300 million Woolongs. Apparently, someone is wielding a hugely powerful chemical weapon, and of course the authorities are at a loss to stop it. The war to take down the most dangerous criminal yet forces the crew to face a true madman, with bare hope to succeed.\n<br><br>\n(Source: Anime News Network)',
      episodes: 1,
      genres: ['Action', 'Drama', 'Mystery', 'Sci-Fi'],
      averageScore: 82,
    };
    const expectedPayload = {
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
      bannerImage:
        'https://s4.anilist.co/file/anilistcdn/media/anime/banner/5-VOcSZFepDDhm.jpg',
      description:
        'As the Cowboy Bebop crew travels the stars, they learn of the largest bounty yet, a huge 300 million Woolongs. Apparently, someone is wielding a hugely powerful chemical weapon, and of course the authorities are at a loss to stop it. The war to take down the most dangerous criminal yet forces the crew to face a true madman, with bare hope to succeed.\n<br><br>\n(Source: Anime News Network)',
      episodes: 1,
      genres: ['Action', 'Drama', 'Mystery', 'Sci-Fi'],
      averageScore: 82,
    };
    // Action
    const animeDetail = new AnimeDetail(payload);
    // Assert
    expect(animeDetail).toStrictEqual(expectedPayload);
  });
  it('shuld create default value if payload did not contain property', () => {
    // Arrange
    const payload = {
      id: 5,
      coverImage: {
        extraLarge:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5-NozHwXWdNLCz.jpg',
        large:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5-NozHwXWdNLCz.jpg',
        medium:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx5-NozHwXWdNLCz.jpg',
        color: null,
      },
      title: {
        romaji: null,
        english: "Cowboy Bebop: The Movie - Knockin' on Heaven's Door",
        native: 'カウボーイビバップ天国の扉',
        userPreferred: 'Cowboy Bebop: Tengoku no Tobira',
      },
      bannerImage:
        'https://s4.anilist.co/file/anilistcdn/media/anime/banner/5-VOcSZFepDDhm.jpg',
      description:
        'As the Cowboy Bebop crew travels the stars, they learn of the largest bounty yet, a huge 300 million Woolongs. Apparently, someone is wielding a hugely powerful chemical weapon, and of course the authorities are at a loss to stop it. The war to take down the most dangerous criminal yet forces the crew to face a true madman, with bare hope to succeed.\n<br><br>\n(Source: Anime News Network)',
      episodes: 1,
      genres: ['Action', 'Drama', 'Mystery', 'Sci-Fi'],
      averageScore: 82,
    };
    const expectedPayload = {
      id: 5,
      coverImage: {
        color: 'white',
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
        romaji: 'not available',
        english: "Cowboy Bebop: The Movie - Knockin' on Heaven's Door",
        native: 'カウボーイビバップ天国の扉',
        userPreferred: 'Cowboy Bebop: Tengoku no Tobira',
      },
      bannerImage:
        'https://s4.anilist.co/file/anilistcdn/media/anime/banner/5-VOcSZFepDDhm.jpg',
      description:
        'As the Cowboy Bebop crew travels the stars, they learn of the largest bounty yet, a huge 300 million Woolongs. Apparently, someone is wielding a hugely powerful chemical weapon, and of course the authorities are at a loss to stop it. The war to take down the most dangerous criminal yet forces the crew to face a true madman, with bare hope to succeed.\n<br><br>\n(Source: Anime News Network)',
      episodes: 1,
      genres: ['Action', 'Drama', 'Mystery', 'Sci-Fi'],
      averageScore: 82,
    };
    // Action
    const animeDetail = new AnimeDetail(payload);
    // Assert
    expect(animeDetail).toStrictEqual(expectedPayload);
    expect(animeDetail.title.romaji).toEqual(expectedPayload.title.romaji);
    expect(animeDetail.coverImage.color).toEqual(
      expectedPayload.coverImage.color
    );
  });
});
