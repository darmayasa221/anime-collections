import CollectionRepository from '../CollectionRepository';

describe('CollectionRepository', () => {
  it('should throw error when invoke abstract behavior', () => {
    // Arrange
    class DummyRepository extends CollectionRepository {}
    const dumyRepository = new DummyRepository();
    // Action and Assert
    expect(() => dumyRepository.addCollection({} as any)).toThrowError(
      'COLLECTION_REPOSITORY.METHOD_NOT_IMLEMENTED',
    );
    expect(() => dumyRepository.deleteCollection({} as any)).toThrowError(
      'COLLECTION_REPOSITORY.METHOD_NOT_IMLEMENTED',
    );
    expect(() => dumyRepository.editCollection({} as any)).toThrowError(
      'COLLECTION_REPOSITORY.METHOD_NOT_IMLEMENTED',
    );
  });
});
