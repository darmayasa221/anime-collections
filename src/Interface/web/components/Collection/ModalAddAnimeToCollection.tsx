import { useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import CollectionFormModal from './ModalCollectionForm';
import CollectionList from './CollectionList';
import { iCollectionItem } from '../../../../Domains/collections/entities/CollectionItem';
import Content from '../UI/Content';

type props = {
  setModalForm: (callback: (prev: object) => any) => any;
  handlerData: (payload: any) => any;
  collections: Array<iCollectionItem>
  CollectionsAction(): void
}
const ContentWrap = styled(Content)({
  position: 'relative',
  minHeight: 'unset',
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#40404059',
  h1: {
    textAlign: 'center',
  },
});
const ContentCollections = styled(Content)({
  position: 'relative',
  minHeight: 'unset',
  height: '80vh',
  margin: '0 25px',
  padding: '0 10px',
  backgroundColor: 'white',
  overflow: 'hidden',
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  borderRadius: '5px',
});
export default function ModalAddAnimeToCollection({
  handlerData, setModalForm, collections, CollectionsAction,
}: props) {
  useEffect(() => {
    CollectionsAction();
  }, []);
  return collections.length === 0 ? (
    <CollectionFormModal handlerData={handlerData} setModalForm={setModalForm} />
  ) : (
    <ContentWrap>
      <ContentCollections>
        <h1>list collections</h1>
        <div css={css({
          overflow: 'scroll',
          height: '100%',
          padding: '10px',
        })}
        >
          <CollectionList type="addAnimeToCollection" collections={collections} />
        </div>
      </ContentCollections>
    </ContentWrap>
  );
}
