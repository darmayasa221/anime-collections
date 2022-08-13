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
const ContentWrap = styled('div')({
  width: '100%',
  position: 'fixed',
  backgroundColor: 'white',
  zIndex: 4,
  left: 0,
  padding: '10px 32px',
  top: '70px',
});
export default function CollectionPage() {
  const [modalForm, setModalForm] = useState({
    visible: false,
    handler: false,
  });
  const { collectionUseCase, setDispatcher } = useContext(ContainerContex);
  const [collections, setCollections] = CollectionsUseState();
  const [_, setCollectionItem] = CollectionItemUseState();
  const { addCollectionItemAction } = CollectionItemAction(
    collectionUseCase,
    setCollectionItem,
    setDispatcher,
  );
  console.log(collections, _);
  useEffect(() => {
    CollectionsAction(collectionUseCase, setCollections, setDispatcher);
  }, []);
  useEffect(() => {
    modalForm.handler && CollectionsAction(collectionUseCase, setCollections, setDispatcher);
    return (() => {
      setModalForm((prev) => ({
        ...prev,
        visible: false,
        handler: false,
      }));
    });
  }, [modalForm.handler]);
  return (
    <>
      <ContentWrap>
        <CollectionHeaderWrap>
          <h1>test</h1>
          <button
            type="button"
            onClick={() => {
              setModalForm({
                visible: true,
                handler: false,
              });
            }}
          >
            Add a Collection
          </button>
        </CollectionHeaderWrap>
        {modalForm.visible && (
        <CollectionForm
          handlerData={addCollectionItemAction}
          setModalForm={setModalForm}
        />
        )}

      </ContentWrap>
      <CollectionList collections={collections.collections} />
    </>
  );
}
