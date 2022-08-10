import { iAnimed } from '../../animes/entities/Anime';

export interface iCollectionItem {
  name: string
  animeCollections?: Array<iAnimed> | []
}
export default class CollectionItem implements iCollectionItem {
  public name: string;

  public animeCollections?:Array<iAnimed> | [];

  constructor(payload: iCollectionItem) {
    const { name, animeCollections } = payload;
    this.name = name;
    this.animeCollections = animeCollections;
  }
}
