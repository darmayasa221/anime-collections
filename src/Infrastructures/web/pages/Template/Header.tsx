import React, { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import NavBar from '../../../../Interface/web/components/NavBar/NavBar';
import HumbergerToggel from '../../../../Interface/web/components/UI/HumbergerToggle';
import Notification from '../../../../Interface/web/components/UI/Notification';
import { NotificationContext } from '../../../store/NotificationsContex';

const HeaderApp = styled('header')({
  padding: '23px',
  position: 'sticky',
  top: 0,
  alignItems: 'center',
  backgroundColor: '#44dc8f',
  display: 'flex',
  justifyContent: 'space-evenly',
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
  zIndex: 100,
  h1: {
    color: 'white',
    fontSize: '24px',
  },
  '@media screen and (min-width: 650px)': {
    padding: '12px',
    h1: {
      fontSize: '40px',
    },
  },
});

export default function Header() {
  const [mode, setMode] = useState(false);
  const {
    errorMessage, isNotif, notificationMessage, status,
  } = useContext(NotificationContext);
  const TogelMenuHandler = () => {
    mode === true ? setMode(false) : setMode(true);
  };
  useEffect(() => {
    status === 'error' && console.warn(status);
  }, [status]);
  return (
    <>
      <HeaderApp>
        <span>
          <h1>Anime Collection</h1>
        </span>
        <HumbergerToggel TogelMenuHandler={TogelMenuHandler} mode={mode} />
        <NavBar mode={mode} />
      </HeaderApp>
      <div css={
        css({
          width: '100%',
          position: 'fixed',
          zIndex: 111,
        })
      }
      >
        <Notification
          notificationMessage={notificationMessage}
          isNotif={isNotif}
          status={status}
          errorMessage={errorMessage}
        />
      </div>
    </>
  );
}
