import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import CollectionForm from '../../../../Interface/web/components/Collection/CollectionForm';
import CollectionAction from '../../../../Interface/web/controllers/Collection';
import CollectionUseState from '../../../../Interface/web/models/Collection';
import ContainerContex from '../../../store/ContainerContex';

const CollectionHeaderWrap = styled('div')({
  h1: {
    position: 'sticky',
    fontSize: '25px',
    marginBottom: '10px',
  },
  button: {
    padding: '8px',
    transition: 'all 0.3s ease',
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    ':active': {
      transform: 'translateY(0.25rem)',
    },
  },

});
export default function CollectionPage() {
  const [modalForm, setModalForm] = useState(false);
  const { collectionUseCase, setDispatcher } = useContext(ContainerContex);
  const [_, setCollection] = CollectionUseState();
  const { addCollectionAction } = CollectionAction(collectionUseCase, setCollection, setDispatcher);
  return (
    <>
      <CollectionHeaderWrap>
        <h1>Collections Anime</h1>
        <button type="button" onClick={() => { setModalForm(true); }}>Add a Collection</button>
      </CollectionHeaderWrap>
      {modalForm
       && <CollectionForm handlerData={addCollectionAction} setModalForm={setModalForm} />}
    </>
  );
}
