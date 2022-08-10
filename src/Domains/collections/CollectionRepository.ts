import { iCollectionItem } from './entities/CollectionItem';

export interface iCollectionRepository {
  addCollection (payload: iCollectionItem): void
  editCollection (nameCollection: string): void
  deleteCollection(nameCollecrion: string): void
}
export default abstract class CollectionRepository implements iCollectionRepository {
  addCollection(payload: iCollectionItem): any {
    throw new Error('COLLECTION_REPOSITORY.METHOD_NOT_IMLEMENTED');
  }

  editCollection(nameCollection: string): void {
    throw new Error('COLLECTION_REPOSITORY.METHOD_NOT_IMLEMENTED');
  }

  deleteCollection(nameCollecrion: string): void {
    throw new Error('COLLECTION_REPOSITORY.METHOD_NOT_IMLEMENTED');
  }
}
