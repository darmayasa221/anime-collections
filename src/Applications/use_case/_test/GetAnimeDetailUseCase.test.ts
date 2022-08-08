import GetAnimeDetailUseCase from '../GetAnimeDetailUseCase';
import AnimeRepository from '../../../Domains/animes/AnimeRepository';
import DispatcherAnime from '../../dispatcher/DispatcherAnime';
import DispatcherError from '../../dispatcher/DispatcherError';
import DispatcherNotification from '../../dispatcher/DispatcherNotification';

describe('GetAnimeDetailUseCase', () => {
  it('should orchestrating the GetAnimeDetail action correctly', async () => {
    // Arrange
    const payload = 1;
    const expectedValueAnimeById = {
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
    // mocking
    const mockAnimeRepository: AnimeRepository = {
      getAnimeById: jest
        .fn()
        .mockImplementation(() =>
          Promise.resolve({ ...expectedValueAnimeById })
        ),
    };
    const mockDispatcherAnime: DispatcherAnime = {
      setAnimeDetail: jest.fn().mockImplementation(() => {}),
    };
    const mockDispatcherError: DispatcherError = {
      setError: jest.fn().mockImplementation(() => {}),
    };
    const mockDispatcherNotification: DispatcherNotification = {
      setNotification: jest.fn().mockImplementation(() => {}),
    };
    // use case
    const getAnimeDetailUseCase: GetAnimeDetailUseCase =
      new GetAnimeDetailUseCase(
        mockAnimeRepository,
        mockDispatcherAnime,
        mockDispatcherNotification,
        mockDispatcherError
      );
    // Action
    await getAnimeDetailUseCase.execute(payload);
    // Assert
    expect(mockAnimeRepository.getAnimeById).toBeCalledWith(payload);
    expect(mockDispatcherAnime.mockDispatcherAnime).toBeCalledWith({
      ...expectedValueAnimeById,
    });
    expect(mockDispatcherError.setError).toBeCalledTimes(0);
    expect(mockDispatcherNotification.setNotification).toBeCalledWith({
      error: false,
    });
  });
});
