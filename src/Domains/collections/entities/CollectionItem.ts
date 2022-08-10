import { iAnimed } from '../../animes/entities/Anime';

export interface iCollectionItem {
  nameCollection: string
  animeCollection: Array<iAnimed> | []
}
export default class CollectionItem implements iCollectionItem {
  public nameCollection: string;

  public animeCollection:Array<iAnimed> | [];

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
