/* eslint-disable comma-dangle */
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Container from './Infrastructures/Container';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <Container />
  </BrowserRouter>
);
