import React from 'react';
import styled from '@emotion/styled';
import { notificationInitialStateType } from '../../models/Notification';
import { errorInitialStateType } from '../../models/Error';

interface props extends notificationInitialStateType, Pick<errorInitialStateType, 'errorMessage'>{}
const NotificationWrap = styled('div')<Omit<notificationInitialStateType, 'notificationMessage'>>(
  {
    width: '100%',
    padding: '4px',
    position: 'absolute',
    textAlign: 'center',
    right: 0,
    top: '8vh',
    zIndex: 102,
    backgroundColor: 'white',
    transitionDuration: '150ms',
    fontSize: '28px',
    boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    borderColor: 'rgb(209 213 219)',
    '@media screen and (min-width: 650px)': {
      width: '50%',
      h1: {
        fontSize: '30px',
      },
    },
    '@media screen and (min-width: 850px)': {
      width: '40%',
      h1: {
        fontSize: '30px',
      },
    },
    '@media screen and (min-width: 1000px)': {
      width: '40%',
      h1: {
        fontSize: '33px',
      },
    },
    '@media screen and (min-width: 1200px)': {
      width: '37%',
      h1: {
        fontSize: '36px',
      },
    },
  },
  ({ isNotif }) => ({ transform: `translateX(${!isNotif ? '100%' : '0'})` }),
  ({ status }) => ({
    h1: {
      color: `${status !== 'error' ? 'black' : 'red'}`,
    },
  }),
);

export default function Notification({
  errorMessage, isNotif, notificationMessage, status,
}:props) {
  return (
    <NotificationWrap status={status} isNotif={isNotif}>
      <h1>
        {status === 'success' && notificationMessage}
        {status === 'error' && errorMessage}
      </h1>
    </NotificationWrap>
  );
}
