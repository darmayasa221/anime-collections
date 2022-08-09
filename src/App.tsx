/* eslint-disable comma-dangle */
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Container from './Infrastructures/Container';
import ContainerContex from './Infrastructures/store/ContainerContex';
import Controller from './Infrastructures/web/Controller';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <ContainerContex.Provider value={Container}>
    <BrowserRouter>
      <Controller />
    </BrowserRouter>
  </ContainerContex.Provider>
);
