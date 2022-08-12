import React, { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import CollectionForm from '../../../../Interface/web/components/Collection/CollectionForm';
import ContainerContex from '../../../store/ContainerContex';
import CollectionList from '../../../../Interface/web/components/Collection/CollectionList';
import CollectionsUseState from '../../../../Interface/web/models/Collections';
import CollectionItemUseState from '../../../../Interface/web/models/CollectionItem';
import CollectionItemAction from '../../../../Interface/web/controllers/CollectionItem';
import CollectionsAction from '../../../../Interface/web/controllers/Collections';

const CollectionHeaderWrap = styled('div')({
  h1: {
    position: 'sticky',
    fontSize: '25px',
    marginBottom: '10px',
  },
  button: {
    padding: '8px',
    transition: 'all 0.3s ease',
    boxShadow:
      '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    ':active': {
      transform: 'translateY(0.25rem)',
    },
  },
});
export default function CollectionPage() {
  const [modalForm, setModalForm] = useState(false);
  const { collectionUseCase, setDispatcher } = useContext(ContainerContex);
  const [collections, setCollections] = CollectionsUseState();
  const [_, setCollectionItem] = CollectionItemUseState();
  const { addCollectionItem } = CollectionItemAction(
    collectionUseCase,
    setCollectionItem,
    setDispatcher,
  );
  useEffect(() => {
    CollectionsAction(collectionUseCase, setCollections, setDispatcher);
  }, [modalForm]);
  return (
    <>
      <CollectionHeaderWrap>
        <h1>test</h1>
        <button
          type="button"
          onClick={() => {
            setModalForm(true);
          }}
        >
          Add a Collection
        </button>
      </CollectionHeaderWrap>
      {modalForm && (
        <CollectionForm
          handlerData={addCollectionItem}
          setModalForm={setModalForm}
        />
      )}
      <CollectionList collections={collections.collections} />
    </>
  );
}
