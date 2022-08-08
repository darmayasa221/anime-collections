import DispatcherError from '../DispatcherError';

describe('DispatcherError', () => {
  it('should throw error when invok abstract behavior', () => {
    // Arrange
    class DummyDispatcher extends DispatcherError {}
    const dummyDispatcher = new DummyDispatcher();
    // Action and Assert
    expect(dummyDispatcher.setError({})).toThrowError(
      'DISPATCHER_ERROR.METHOD_NOT_IMPLEMENTED'
    );
  });
});
