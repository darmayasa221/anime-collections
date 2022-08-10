/* eslint-disable no-unused-vars */
import { iAnimed } from '../../Domains/animes/entities/Anime';

export interface iDispatcherCollection {
  setAnimeToCollection(payload: iAnimed): any
}
export default abstract class DispatcherCollection implements iDispatcherCollection {
  setAnimeToCollection(payload: iAnimed): any {
    throw new Error('DISPATCHER_COLLECTION.METHOD_NOT_IMPLEMENTED');
  }
}
