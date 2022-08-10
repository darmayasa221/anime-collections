import DispatcherNotification from '../../../Applications/dispatcher/DispatcherNotification';
import { dispatchersObject } from '../../../Interface/web/dispatcherAdapter/DispatcherAdapter';

export default class DispatcherNotificationSetState extends DispatcherNotification {
  private dispatch: dispatchersObject;
  // private message: string

  constructor(dispatch: dispatchersObject) {
    super();
    this.dispatch = dispatch;
    // this.message
  }

  setNotification({ error, message }:{error?:boolean, message?: string}): void {
    if (!error) {
      setTimeout(() => {
        this.dispatch.setNotification((prev) => ({
          ...prev,
          isNotif: false,
          status: 'none',
          notificationMessage: '',
        }));
      }, message ? 1000 : 3000);
      this.dispatch.setNotification((prev) => ({
        ...prev,
        isNotif: true,
        status: 'success',
        notificationMessage: message ? `${message} success been added to collection` : 'success to display this pages',
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
