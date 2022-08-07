import { useState } from 'react';

type uNotificationState = {
  types: 'error_message' | 'success_message' | '';
  status: boolean;
  message: string;
};

const NotificationsState = () => {
  const [notification, setNotification] = useState<uNotificationState>({
    types: '',
    status: false,
    message: '',
  });
  const NotificationHandler = (notifications: uNotificationState): void => {
    setNotification((prev) => ({ ...prev, ...notifications }));
  };

  return [notification, NotificationHandler] as const;
};

export default NotificationsState;
