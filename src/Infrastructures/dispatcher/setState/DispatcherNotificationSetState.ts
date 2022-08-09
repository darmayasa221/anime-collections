import DispatcherNotification from '../../../Applications/dispatcher/DispatcherNotification';
import { dispatchersObject } from '../../../Interface/web/dispatcherAdapter/DispatcherAdapter';

export default class DispatcherNotificationSetState extends DispatcherNotification {
  private dispatch: dispatchersObject;

  constructor(dispatch: dispatchersObject) {
    super();
    this.dispatch = dispatch;
  }

  setNotification({ error }:{error:boolean}): void {
    if (!error) {
      setTimeout(() => {
        this.dispatch.setNotification((prev) => ({
          ...prev,
          isNotif: false,
          status: 'none',
          notificationMessage: '',
        }));
      }, 3000);
      this.dispatch.setNotification((prev) => ({
        ...prev,
        isNotif: true,
        status: 'success',
        notificationMessage: 'success to display this pages',
      }));
    } else {
      setTimeout(() => {
        this.dispatch.setNotification((prev) => ({
          ...prev,
          isNotif: false,
          status: 'none',
          notificationMessage: '',
        }));
      }, 3000);
      this.dispatch.setNotification((prev) => ({
        ...prev,
        isNotif: true,
        status: 'error',
        notificationMessage: '',
      }));
    }
  }
}
