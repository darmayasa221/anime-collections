export interface iDispatcherNotification {
  setNotification({ error, message }:{error?:boolean, message?: string}): void;
}
export default abstract class DispatcherNotification
implements iDispatcherNotification {
  setNotification({ error, message }:{error?:boolean, message?: string}): any {
    throw new Error('DISPATCHER_NOTIFICATION.METHOD_NOT_IMPELEMENTED');
  }
}
