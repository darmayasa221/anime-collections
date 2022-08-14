/* eslint-disable react/require-default-props */
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import ModalAddAnimeToCollection from '../Collection/ModalAddAnimeToCollection';
import ModalCollectionForm from '../Collection/ModalCollectionForm';

// export type propsModal = {
//   type: 'addAnimeToCollection' | 'addCollectionItem',
//   setModalForm: (callback:(prev: object) => any) => any,
//   handlerData: (payload: any) => any
// }
// interface props extends propsModal {
//   CollectionForm: typeof ModalCollectionForm
//   AddAnimeToCollection: typeof ModalAddAnimeToCollection
// }
type props = {
  children: ReactNode
}
export default function Modal({ children }:props) {
  const modal = document.getElementById('modal-form')!;
  return (
    createPortal(children, modal)
    // <>
    //   { (type === 'addCollectionItem') && createPortal(<CollectionForm handlerData={handlerData} setModalForm={setModalForm} />, modal)}
    //   { (type === 'addAnimeToCollection') && createPortal(<AddAnimeToCollection handlerData={handlerData} setModalForm={setModalForm} />, modal)}
    // </>
  );
}
