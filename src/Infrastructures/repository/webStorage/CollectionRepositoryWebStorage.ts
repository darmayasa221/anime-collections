/* eslint-disable no-useless-constructor */
import CollectionRepository from '../../../Domains/collections/CollectionRepository';
import { iCollectionItem } from '../../../Domains/collections/entities/CollectionItem';
import { iCollections } from '../../../Domains/collections/entities/Collections';

export default class CollectionRepositoryWebStorage extends CollectionRepository {
  constructor() {
    super();
  }

  addCollection(payload: iCollectionItem) {
    if (!localStorage.getItem('collections')) {
      localStorage.setItem('collections', JSON.stringify({ collections: [payload] }));
    } else {
      const collections: iCollections = JSON.parse(localStorage.getItem('collections') || '');
      collections.collections.forEach((collection) => {
        if (collection.nameCollection === payload.nameCollection) {
          throw new Error('collection name of item been used');
        }
      });
      localStorage.setItem('collections', JSON.stringify({ collections: [payload] }));
    }
  }
}
