import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AnimeDetail from '../../../../Interface/web/components/Anime/AnimeDetail';
import AnimeDetailAction from '../../../../Interface/web/controllers/AnimeDetail';
import CollectionItemAction from '../../../../Interface/web/controllers/CollectionItem';
import CollectionsAction from '../../../../Interface/web/controllers/Collections';
import AnimeDetailUseState from '../../../../Interface/web/models/AnimeDetail';
import CollectionItemUseState from '../../../../Interface/web/models/CollectionItem';
import CollectionsUseState from '../../../../Interface/web/models/Collections';
import ContainerContex from '../../../store/ContainerContex';

export default function AnimeDetailPage() {
  const { id } = useParams();
  const [modalForm, setModalForm] = useState({
    visible: false,
    handler: false,
  });
  const [animeDetail, setAnimeDetail] = AnimeDetailUseState();
  const [collections, setCollections] = CollectionsUseState();
  const [_, setCollectionItem] = CollectionItemUseState();
  const { getAnimeDetailUseCase, collectionUseCase, setDispatcher } = useContext(ContainerContex);
  const { addCollectionItemAction } = CollectionItemAction(
    collectionUseCase,
    setCollectionItem,
    setDispatcher,
  );
  const handlerSetCollectionsActions = () => {
    CollectionsAction(collectionUseCase, setCollections, setDispatcher);
  };
  const modalFormHandler = () => {
    setModalForm((prev) => ({
      ...prev,
      visible: true,
      handler: false,
    }));
  };
  useEffect(() => {
    animeDetail.isLoading
    && AnimeDetailAction(
      getAnimeDetailUseCase,
      setAnimeDetail,
      setDispatcher,
      Number(id),
    );
  }, [animeDetail.isLoading]);
  return animeDetail.isLoading ? (
    <h1>Loading</h1>
  ) : (
    <AnimeDetail
      animeDetail={animeDetail.data}
      modalForm={modalForm}
      modalFormHandler={modalFormHandler}
      handlerSetCollectionsActions={handlerSetCollectionsActions}
      collections={collections.collections}
      setModalForm={setModalForm}
      handlerData={addCollectionItemAction}
    />
  );
}
