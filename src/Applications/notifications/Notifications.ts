/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable brace-style */
export interface iNotifications {
  setNotification(notification: object): any;
}

export default class Notifications implements iNotifications {
  setNotification(notification: object): void {
    throw new Error('method Not Implement');
  }
}
