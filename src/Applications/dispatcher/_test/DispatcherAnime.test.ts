import DispatcherAnime from '../DispatcherAnime';

describe('DispatcherAnime', () => {
  it('shuld throw error when invoked abstract behavior', () => {
    // Arrange
    class DummyDispatcher extends DispatcherAnime {}
    const dumyDispatcher = new DummyDispatcher();
    // Acction And Assert
    expect(dumyDispatcher.setAnimeDetail({})).toThrowError(
      'DISPATCHER_ANIME.METHOD_NOT_IMPLEMENTED'
    );
    expect(dumyDispatcher.setAnimes({})).toThrowError(
      'DISPATCHER_ANIME.METHOD_NOT_IMPLEMENTED'
    );
  });
});
