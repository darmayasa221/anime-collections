/* eslint-disable no-useless-constructor */
import CollectionRepository from '../../../Domains/collections/CollectionRepository';
import CollectionItem, { iCollectionItem } from '../../../Domains/collections/entities/CollectionItem';
import Collections, { iCollections } from '../../../Domains/collections/entities/Collections';

export default class CollectionRepositoryWebStorage extends CollectionRepository {
  constructor() {
    super();
  }

  private clearCollectionsLocalStorage() {
    localStorage.clear();
  }

  getCollections(): iCollections | [] {
    const collections:iCollections = JSON.parse(localStorage.getItem('collections') || '');
    if (collections.collections.length > 1) {
      return new Collections(collections);
    }
    return [];
  }

  getCollectionDetail(nameCollection: string): iCollectionItem | any {
    const collections:iCollections = JSON.parse(localStorage.getItem('collections') || '');
    const collectionItem = collections.collections.filter(
      (collection) => collection.nameCollection === nameCollection,
    );
    if (collectionItem.length === 0) {
      throw new Error('collection not found');
    }
    return new CollectionItem(collectionItem[0]);
  }

  addCollection(payload: iCollectionItem): iCollections | void | [] {
    if (!localStorage.getItem('collections')) {
      localStorage.setItem('collections', JSON.stringify({ collections: [payload] }));
      return this.getCollections();
    }
    const collections: iCollections = JSON.parse(localStorage.getItem('collections') || '');
    collections.collections.forEach((collection) => {
      if (collection.nameCollection === payload.nameCollection) {
        throw new Error('collection name of item been used');
      }
    });
    collections.collections.push(payload);
    this.clearCollectionsLocalStorage();
    localStorage.setItem('collections', JSON.stringify(collections));
    return this.getCollections();
  }

  editCollection(nameCollection: string): iCollections | void | [] {
    const collections: iCollections = JSON.parse(localStorage.getItem('collections') || '');
    collections.collections.forEach((collection) => {
      if (collection.nameCollection === nameCollection) {
        throw new Error('collection name of item been used');
      }
    });
    const colectionIndex = collections.collections.findIndex(
      (collection) => collection.nameCollection === nameCollection,
    );
    collections.collections[colectionIndex].nameCollection = nameCollection;
    this.clearCollectionsLocalStorage();
    localStorage.setItem('collections', JSON.stringify(collections));
    return this.getCollections();
  }

  deleteCollection(nameCollection: string): iCollections | [] {
    const collections: iCollections = JSON.parse(localStorage.getItem('collections') || '');
    const newCollections = collections.collections.filter(
      (collection) => collection.nameCollection !== nameCollection,
    );
    this.clearCollectionsLocalStorage();
    localStorage.setItem('collections', JSON.stringify({ collections: { ...newCollections } }));
    return this.getCollections();
  }
}
