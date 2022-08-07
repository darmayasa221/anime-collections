import Notifications from '../../Applications/notifications/Notifications';

export default class NotificationsUseState extends Notifications {
  private notificationsHandler: Function;

  constructor(notificationsHandler: Function) {
    super();
    this.notificationsHandler = notificationsHandler;
  }

  setNotification(notification: object): void {
    this.notificationsHandler(notification);
    if (notification.status) {
      setTimeout(() => {
        this.notificationsHandler(notification);
      }, 3000);
      this.notificationsHandler(notification);
    }
  }
}
