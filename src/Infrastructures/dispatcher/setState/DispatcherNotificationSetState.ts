import DispatcherNotification from '../../../Applications/dispatcher/DispatcherNotification';
import { dispatchersObject } from '../../../Interface/web/dispatcherAdapter/DispatcherAdapter';

export default class DispatcherNotificationSetState extends DispatcherNotification {
  private dispatch: dispatchersObject;

  constructor(dispatch: dispatchersObject) {
    super();
    this.dispatch = dispatch;
  }

  setNotification(errors: object): void {

  }
}
