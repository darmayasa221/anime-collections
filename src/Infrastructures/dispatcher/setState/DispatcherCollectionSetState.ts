import DispatcherCollection from '../../../Applications/dispatcher/DispatcherCollection';
import { iAnimed } from '../../../Domains/animes/entities/Anime';
import { iCollectionItem } from '../../../Domains/collections/entities/CollectionItem';
import { dispatchersObject } from '../../../Interface/web/dispatcherAdapter/DispatcherAdapter';

export default class DispatcherCollectionSetState extends DispatcherCollection {
  private dispatch: dispatchersObject;

  constructor(dispatch: dispatchersObject) {
    super();
    this.dispatch = dispatch;
  }

  setAnimeToCollection(payload: iAnimed): void {
    this.dispatch.setAnimeToCollection((prev) => {
      prev.push(payload);
      return [...prev];
    });
  }

  setCollection(payload: iCollectionItem) {
  }
}
