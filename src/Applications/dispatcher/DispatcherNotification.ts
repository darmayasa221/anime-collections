export interface iDispatcherNotification {
  setNotification(errors: object): void;
}
export default abstract class DispatcherNotification
implements iDispatcherNotification {
  setNotification(errors: object): any {
    throw new Error('DISPATCHER_NOTIFICATION.METHOD_NOT_IMPELEMENTED');
  }
}
