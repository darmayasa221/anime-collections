import CollectionItem from '../CollectionItem';

describe('CollectionItem Entitis', () => {
  it('should throw error when property name have ', () => {
    // Arrange
    const payload = {
      nameCollection: 'anime!<Script></script>',
      animeCollection: [],
    };
    // Action and Assert
    expect(() => new CollectionItem(payload)).toThrowError('COLLECTION_DOMAIN.CONTAIN_RESTRICTED_CHARACTER');
  });
  it('should create CollectionItem correctly', () => {
    // Arrange
    const payload = {
      nameCollection: 'anime collection one',
      animeCollection: [],
    };
    // Action
    const { nameCollection, animeCollection } = new CollectionItem(payload);
    // Assert
    expect(nameCollection).toEqual(payload.nameCollection);
    expect(animeCollection).toEqual(payload.animeCollection);
  });
});
