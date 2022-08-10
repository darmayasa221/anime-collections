import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Container from './Infrastructures/Container';
import ContainerContex from './Infrastructures/store/ContainerContex';
import NotificationContextProvider from './Infrastructures/store/NotificationsContex';
import Controller from './Infrastructures/web/Controller';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <ContainerContex.Provider value={Container}>
    <NotificationContextProvider>
      <BrowserRouter>
        <Controller />
      </BrowserRouter>
    </NotificationContextProvider>
  </ContainerContex.Provider>,
);
