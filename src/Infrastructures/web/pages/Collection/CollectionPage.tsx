import React, { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import ContainerContex from '../../../store/ContainerContex';
import CollectionList from '../../../../Interface/web/components/Collection/CollectionList';
import CollectionsUseState from '../../../../Interface/web/models/Collections';
import CollectionItemUseState from '../../../../Interface/web/models/CollectionItem';
import CollectionItemAction from '../../../../Interface/web/controllers/CollectionItem';
import CollectionsAction from '../../../../Interface/web/controllers/Collections';
import ModalCollectionForm from '../../../../Interface/web/components/Collection/ModalCollectionForm';
import Modal from '../../../../Interface/web/components/UI/Modal';
import Button from '../../../../Interface/web/components/UI/Button';

const CollectionHeaderWrap = styled('div')({
  h1: {
    position: 'sticky',
    fontSize: '25px',
    marginBottom: '10px',
  },
});
const ButtonUI = styled(Button)({
  position: 'unset',
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
          <h1>Collections</h1>
          <ButtonUI
            type="button"
            onClick={() => {
              setModalForm({
                visible: true,
                handler: false,
              });
            }}
            text="Add a Collection"
          />
        </CollectionHeaderWrap>
        {modalForm.visible && (
          <Modal>
            <ModalCollectionForm
              handlerData={addCollectionItemAction}
              setModalForm={setModalForm}
            />
          </Modal>
        )}

      </ContentWrap>
      <CollectionList type="addCollectionItem" collections={collections.collections} />
    </>
  );
}
