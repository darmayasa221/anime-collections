/* eslint-disable no-unused-vars */
import { iCollectionItem } from '../../Domains/collections/entities/CollectionItem';
import { iCollections } from '../../Domains/collections/entities/Collections';

export interface iDispatcherCollection {
  setCollectionItem(payload: iCollectionItem): any
  setCollections(payload: iCollections): any
}
export default abstract class DispatcherCollection implements iDispatcherCollection {
  setCollectionItem(payload: iCollectionItem): any {
    throw new Error('DISPATCHER_COLLECTION.METHOD_NOT_IMPLEMENTED');
  }

  setCollections(payload: iCollections):any {
    throw new Error('DISPATCHER_COLLECTION.METHOD_NOT_IMPLEMENTED');
  }
}
