import CollectionItem, { iCollectionItem } from './CollectionItem';

export interface iCollections {
  collections: Array<iCollectionItem> | []
}

export default class Collections implements iCollections {
  public collections: iCollectionItem[];

  constructor(payload: iCollections) {
    const newCollection = this.verifyPayload(payload);
    this.collections = newCollection;
  }

  private verifyPayload({ collections }: iCollections): Array<iCollectionItem> {
    const newCollection: Array<iCollectionItem> = collections.map<iCollectionItem>(
      (collection) => ({
        ...new CollectionItem(collection),
      }),
    );
    return newCollection;
  }
}
