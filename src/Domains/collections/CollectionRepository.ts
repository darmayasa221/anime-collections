import { iCollectionItem } from './entities/CollectionItem';
import { iCollections } from './entities/Collections';

export interface iCollectionRepository {
  addCollection (payload: iCollectionItem): void
  editCollection (nameCollection: string): iCollections
  deleteCollection(nameColletion: string): iCollections
  getCollections():iCollections
  getCollectionDetail(nameCollection: string): iCollectionItem
}
export default abstract class CollectionRepository implements iCollectionRepository {
  addCollection(payload: iCollectionItem): any {
    throw new Error('COLLECTION_REPOSITORY.METHOD_NOT_IMLEMENTED');
  }

  editCollection(nameCollection: string): any {
    throw new Error('COLLECTION_REPOSITORY.METHOD_NOT_IMLEMENTED');
  }

  deleteCollection(nameColletion: string): any {
    throw new Error('COLLECTION_REPOSITORY.METHOD_NOT_IMLEMENTED');
  }

  getCollections(): any {
    throw new Error('COLLECTION_REPOSITORY.METHOD_NOT_IMLEMENTED');
  }

  getCollectionDetail(nameCollection: string): any {
    throw new Error('COLLECTION_REPOSITORY.METHOD_NOT_IMLEMENTED');
  }
}
