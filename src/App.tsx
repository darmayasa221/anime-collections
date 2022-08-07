/* eslint-disable comma-dangle */
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Container from './Infrastructures/Container';
import Controller from './Infrastructures/web/Controller';
import ContainerContex from './Infrastructures/web/store/container-contex';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <ContainerContex.Provider value={Container}>
    <BrowserRouter>
      <Controller />
    </BrowserRouter>
  </ContainerContex.Provider>
);
