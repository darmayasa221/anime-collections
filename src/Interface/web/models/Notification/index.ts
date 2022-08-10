import { useState } from 'react';

export type notificationInitialStateType = {
  status: 'error' | 'success' | 'none'
  isNotif: boolean;
  notificationMessage: string;
};
export type setNotificationDispatchType = (
  callback: (prev: notificationInitialStateType) => notificationInitialStateType
) => void;

const NotificationUseState = () => {
  const [notification, setNotification] = useState<notificationInitialStateType>({
    status: 'none',
    isNotif: false,
    notificationMessage: '',
  });
  return [notification, setNotification] as const;
};

export default NotificationUseState;
