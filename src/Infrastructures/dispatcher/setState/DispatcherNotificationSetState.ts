import DispatcherNotification from '../../../Applications/dispatcher/DispatcherNotification';

export default class DispatcherNotificationSetState extends DispatcherNotification {
  private dispatch: any;

  constructor(dispatch: any) {
    super();
    this.dispatch = dispatch;
  }

  setNotification(errors: object): Error {
    console.log('nottif');
  }
}
