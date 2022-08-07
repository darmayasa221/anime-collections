import { createContext } from 'react';
import Container from '../../Container';

const ContainerContex = createContext<typeof Container>(Container);

export default ContainerContex;
