/* eslint-disable no-unused-vars */
import { setDispathcerType } from '../../dispatcherAdapter/DispatcherAdapter';
import { setNotificationDispatchType } from '../../models/Notification';

export default function NotificationAction(
  dispatch: setNotificationDispatchType,
  dispactAdapter: setDispathcerType,
) {
  dispactAdapter({ setNotification: dispatch });
}
