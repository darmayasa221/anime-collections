/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-redeclare */
import React, { createContext, ReactNode, useContext } from 'react';
import ErrorUseState, { errorInitialStateType } from '../../Interface/web/models/Error';
import NotificationUseState, { notificationInitialStateType } from '../../Interface/web/models/Notification';
import ContainerContex from './ContainerContex';

interface NotificationContext extends notificationInitialStateType, errorInitialStateType{}
export const NotificationContext = createContext<NotificationContext>({
  errorMessage: '',
  isError: false,
  isNotif: false,
  notificationMessage: '',
  status: 'none',
});

export default function NotificationContextProvider({ children }:{children:ReactNode}) {
  const [notification, setNotification] = NotificationUseState();
  const [error, setError] = ErrorUseState();
  const { setDispatcher } = useContext(ContainerContex);
  setDispatcher([{ setError }, { setNotification }]);
  return (
    <NotificationContext.Provider value={{ ...error, ...notification }}>
      {children}
    </NotificationContext.Provider>
  );
}
