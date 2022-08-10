import { iAnimed } from '../../Domains/animes/entities/Anime';
import { iDispatcherCollection } from '../dispatcher/DispatcherCollection';
import { iDispatcherNotification } from '../dispatcher/DispatcherNotification';

export interface iCollectionUseCase {
  addAnimeToCollection(payload: iAnimed): void
}
export default class CollectionUseCase implements iCollectionUseCase {
  private dispatcherCollection: iDispatcherCollection;

  private dispatcherNotification: iDispatcherNotification;

  constructor(
    dispatcherCollection: iDispatcherCollection,
    dispatcherNotification: iDispatcherNotification,
  ) {
    this.dispatcherCollection = dispatcherCollection;
    this.dispatcherNotification = dispatcherNotification;
  }

  addAnimeToCollection(payload: iAnimed):void {
    this.dispatcherCollection.setAnimeToCollection(payload);
    this.dispatcherNotification.setNotification({ message: payload.title.native });
  }
}
