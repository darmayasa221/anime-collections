/* eslint-disable comma-dangle */
import GetAnimesUseCase from '../GetAnimesUseCase';
import AnimeRepository from '../../../Domains/animes/AnimeRepository';
import DispatcherAnime from '../../dispatcher/DispatcherAnime';
import DispatcherError from '../../dispatcher/DispatcherError';
import DispatcherNotification from '../../dispatcher/DispatcherNotification';
import Animes from '../../../Domains/animes/entities/Animes';

describe('GetAnimesUseCase', () => {
  it('should orchestrating the GetAnimes action correctly', async () => {
    // Arrange
    const expectedAnimesValue = new Animes({
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
    });
    // mocking
    const mockAnimeRepository: Pick<AnimeRepository, 'getAnimes'> = {
      getAnimes: jest
        .fn()
        .mockImplementation(() => Promise.resolve(expectedAnimesValue)),
    };
    const mockDispatcherAnime: Pick<DispatcherAnime, 'setAnimes'> = {
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
    expect(mockAnimeRepository.getAnimes).toHaveBeenCalled();
    expect(mockDispatcherAnime.setAnimes).toBeCalledWith(expectedAnimesValue);
    expect(mockDispatcherError.setError).not.toHaveBeenCalled();
    expect(mockDispatcherNotification.setNotification).toBeCalledWith({
      error: false,
    });
  });
});
