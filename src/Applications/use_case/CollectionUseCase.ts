import { iAnimed } from '../../Domains/animes/entities/Anime';
import { iCollectionRepository } from '../../Domains/collections/CollectionRepository';
import CollectionItem, { iCollectionItem } from '../../Domains/collections/entities/CollectionItem';
import { iCollections } from '../../Domains/collections/entities/Collections';
import { iDispatcherCollection } from '../dispatcher/DispatcherCollection';
import { iDispatcherError } from '../dispatcher/DispatcherError';
import { iDispatcherNotification } from '../dispatcher/DispatcherNotification';

export interface iCollectionUseCase {
  addAnimeToCollection(payload: iCollectionItem): void
  addCollectionItem({ nameCollection }:iCollectionItem): void
  getCollections():void
}
export default class CollectionUseCase implements iCollectionUseCase {
  private dispatcherCollection: iDispatcherCollection;

  private collectionRepository: iCollectionRepository;

  private dispatcherNotification: iDispatcherNotification;

  private dispatcherError: iDispatcherError;

  private isError: boolean;

  private message: string | undefined;

  constructor(
    collectionRepository: iCollectionRepository,
    dispatcherCollection: iDispatcherCollection,
    dispatcherNotification: iDispatcherNotification,
    dispatcherError: iDispatcherError,
  ) {
    this.collectionRepository = collectionRepository;
    this.dispatcherCollection = dispatcherCollection;
    this.dispatcherNotification = dispatcherNotification;
    this.dispatcherError = dispatcherError;
    this.isError = false;
    this.message;
  }

  addAnimeToCollection(payload: iCollectionItem):void {
    try {
      const collections = this.collectionRepository.addAnimeToCollection(payload);
      this.dispatcherCollection.setCollections(collections);
      this.message = payload.nameCollection;
    } catch (error) {
      this.isError = true;
      this.dispatcherError.setError(error as any);
    } finally {
      this.dispatcherNotification.setNotification({ error: this.isError, message: this.message });
    }
  }

  addCollectionItem(payload: iCollectionItem): void {
    try {
      const newCollection = new CollectionItem(payload);
      this.collectionRepository.addCollection(newCollection);
      this.dispatcherCollection.setCollectionItem(newCollection);
      this.message = payload.nameCollection;
    } catch (error) {
      this.isError = true;
      this.dispatcherError.setError(error as any);
    } finally {
      this.dispatcherNotification.setNotification({ error: this.isError });
    }
  }

  getCollections(): void {
    try {
      const collections = this.collectionRepository.getCollections();
      this.dispatcherCollection.setCollections(collections);
    } catch (error) {
      this.isError = true;
      this.dispatcherError.setError(error as any);
    } finally {
      this.dispatcherNotification.setNotification({ error: this.isError });
    }
  }
}
