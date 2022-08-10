import { iAnimed } from '../../animes/entities/Anime';

export interface iCollectionItem {
  nameCollection: string
  animeCollection: Array<iAnimed> | [] | undefined
}
export default class CollectionItem implements iCollectionItem {
  public nameCollection: string;

  public animeCollection:Array<iAnimed> | [] | undefined;

  constructor(payload: iCollectionItem) {
    this.verifyPayload(payload);
    const { nameCollection, animeCollection } = payload;
    this.nameCollection = nameCollection;
    this.animeCollection = animeCollection;
  }

  private verifyPayload({ nameCollection }:iCollectionItem) {
    if (nameCollection.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
      throw new Error('COLLECTION_DOMAIN.CONTAIN_RESTRICTED_CHARACTER');
    }
  }
}
