import DispatcherCollection from '../../../Applications/dispatcher/DispatcherCollection';
import { iCollectionItem } from '../../../Domains/collections/entities/CollectionItem';
import { iCollections } from '../../../Domains/collections/entities/Collections';
import { dispatchersObject } from '../../../Interface/web/dispatcherAdapter/DispatcherAdapter';

export default class DispatcherCollectionSetState extends DispatcherCollection {
  private dispatch: dispatchersObject;

  constructor(dispatch: dispatchersObject) {
    super();
    this.dispatch = dispatch;
  }

  setCollectionItem(payload: iCollectionItem):void {
    this.dispatch.setCollectionItem((prev) => ({
      ...prev,
      ...payload,
    }));
  }

  setCollections(payload: iCollections):void {
    this.dispatch.setCollections((prev) => (
      {
        ...prev,
        ...payload,
      }));
  }
}
