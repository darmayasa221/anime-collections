export type iDispatcherNotificationInitial = {
  error?: boolean,
  message?: string,
}

export interface iDispatcherNotification {
  setNotification(payload: iDispatcherNotificationInitial): void;
}
export default abstract class DispatcherNotification
implements iDispatcherNotification {
  setNotification(payload: iDispatcherNotificationInitial): any {
    throw new Error('DISPATCHER_NOTIFICATION.METHOD_NOT_IMPELEMENTED');
  }
}
