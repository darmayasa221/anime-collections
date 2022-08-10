/* eslint-disable no-unused-vars */
import { iAnimed } from '../../Domains/animes/entities/Anime';
import { iCollectionItem } from '../../Domains/collections/entities/CollectionItem';

export interface iDispatcherCollection {
  setAnimeToCollection(payload: iAnimed): any
  setCollection(payload: iCollectionItem): any
}
export default abstract class DispatcherCollection implements iDispatcherCollection {
  setAnimeToCollection(payload: iAnimed): any {
    throw new Error('DISPATCHER_COLLECTION.METHOD_NOT_IMPLEMENTED');
  }

  setCollection(payload: iCollectionItem):any {
    throw new Error('DISPATCHER_COLLECTION.METHOD_NOT_IMPLEMENTED');
  }
}
