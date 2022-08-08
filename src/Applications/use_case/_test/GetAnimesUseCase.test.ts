import GetAnimesUseCase from '../GetAnimesUseCase';
import AnimeRepository from '../../../Domains/animes/AnimeRepository';
import DispatcherAnime from '../../dispatcher/DispatcherAnime';
import DispatcherError from '../../dispatcher/DispatcherError';
import DispatcherNotification from '../../dispatcher/DispatcherNotification';

describe('GetAnimesUseCase', () => {
  it('should orchestrating the GetAnimes action correctly', async () => {
    // Arrange
    const expectedAnimesValue = {
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
    // mocking
    const mockAnimeRepository: AnimeRepository = {
      getAnimes: jest
        .fn()
        .mockImplementation(() => Promise.resolve({ ...expectedAnimesValue })),
    };
    const mockDispatcherAnime: DispatcherAnime = {
      setAnimes: jest.fn().mockImplementation(() => {}),
    };
    const mockDispatcherError: DispatcherError = {
      setError: jest.fn().mockImplementation(() => {}),
    };
    const mockDispatcherNotification: DispatcherNotification = {
      setNotification: jest.fn().mockImplementation(() => {}),
    };
    // use case
    const getAnimesUseCase: GetAnimesUseCase = new GetAnimesUseCase(
      mockAnimeRepository,
      mockDispatcherAnime,
      mockDispatcherNotification,
      mockDispatcherError
    );
    // Action
    await getAnimesUseCase.execute();
    // Assert
    expect(mockAnimeRepository.getAnimes).toBeCalledWithTimes(1);
    expect(mockDispatcherAnime.setAnimess).toBeCalledWithTimes(1);
    expect(mockDispatcherError.setError).toBeCalledTimes(0);
    expect(mockDispatcherNotification.setNotification).toBeCalledWith({
      error: false,
    });
  });
});
