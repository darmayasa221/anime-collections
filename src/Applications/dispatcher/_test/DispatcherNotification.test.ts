import DispatcherNotification from '../DispatcherNotification';

describe('DispatcherNotification', () => {
  it('should throw error when invoked abstrack behavior', () => {
    // Arrange
    class DummyDispatcher extends DispatcherNotification {}
    const dummyDispatcher = new DummyDispatcher();
    // Action and Assert
    expect(dummyDispatcher.setNotification({})).toThrowError(
      'DISPATCHER_NOTIFICATION.METHOD_NOT_IMPELEMENTED'
    );
  });
});
