import { useState } from 'react';

export type notificationInitialStateType = {
  isNotif: boolean;
  notificationMessage: string;
};
export type setNotificationDispatchType = (
  callback: (prev: notificationInitialStateType) => notificationInitialStateType
) => void;

const NotificationUseState = () => {
  const [notification, setNotification] =
    useState<notificationInitialStateType>({
      isNotif: false,
      notificationMessage: '',
    });
  return [notification, setNotification] as const;
};

export default NotificationUseState;
