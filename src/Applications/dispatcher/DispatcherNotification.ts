/* eslint-disable brace-style */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
export interface iDispatcherNotification {
  setNotification(errors: object): void;
}
export default abstract class DispatcherNotification
  implements iDispatcherNotification
{
  setNotification(errors: object): Error {
    throw new Error('DISPATCHER_NOTIFICATION.METHOD_NOT_IMPELEMENTED');
  }
}
