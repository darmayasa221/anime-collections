/* eslint-disable react/require-default-props */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { iAnimedDetail } from '../../../../Domains/animes/entities/AnimeDetail';
import AnimeTitle from './AnimeTitle';
import Button from '../UI/Button';
import Content from '../UI/Content';
import Modal from '../UI/Modal';
import ModalAddAnimeToCollection from '../Collection/ModalAddAnimeToCollection';
import { iCollectionItem } from '../../../../Domains/collections/entities/CollectionItem';

type props = {
  animeDetail: iAnimedDetail;
  modalForm:{
  visible: boolean,
  handler: boolean,
  }
  modalFormHandler() :void
   setModalForm: (callback: (prev: object) => any) => any;
  handlerSetCollectionsActions():void
  handlerData: (payload: any) => any
  collections: Array<iCollectionItem>
};
const AnimeDetailWrap = styled('div')({
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'repeat(2,1fr)',
  marginTop: '50px',
  marginBottom: '20px',
});
const BannerImageWrap = styled('div')({
  position: 'absolute',
  left: 0,
  top: 0,
});
const CoverImageWrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  img: {
    width: '100%',
  },
  '@media screen and (min-width: 1024px)': {
    border: 'none',
    img: {
      width: 'auto',
    },
  },
});
const GenresWrap = styled('div')({
  display: 'flex',
  alignItems: 'end',
  marginLeft: '20px',
});
const RatingWrap = styled('div')({
  backgroundColor: 'black',
  color: 'wheat',
  marginTop: '5px',
  padding: '2px',
});
const DescriptionWrap = styled('div')({
  '@media screen and (min-width: 650px)': {
    h2: {
      fontSize: '30px',
    },
    p: {
      fontSize: '20px',
    },
  },
});
const TitleWrap = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gridColumnGap: '10px',
});
const ButtonAdd = styled(Button)({
  marginLeft: '20px',
  position: 'unset',
  padding: '2px 5px',
  border: '1px black solid',
  boxShadow: 'none',
});
const ContentWrap = styled(Content)({
  margin: 0,
  position: 'unset',
  '@media screen and (min-width: 1200px)': {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    top: '-30px',
  },
});
export default function AnimeDetail({
  animeDetail,
  modalForm,
  collections,
  modalFormHandler,
  handlerSetCollectionsActions,
  setModalForm,
  handlerData,
}: props) {
  const titleKey = Object.keys(animeDetail.title);
  return (
    <>
      {
        modalForm.visible && (
        <Modal>
          <ModalAddAnimeToCollection
            CollectionsAction={handlerSetCollectionsActions}
            collections={collections}
            handlerData={handlerData}
            setModalForm={setModalForm}
          />
        </Modal>
        )
      }
      <ContentWrap>
        <div css={css({
          '@media screen and (min-width: 1200px)': {
            maxWidth: '1200px',
            position: 'relative',
            padding: '32px',
          },
        })}
        >
          <BannerImageWrap>
            <img
              css={css({ width: '100%' })}
              src={animeDetail.bannerImage}
              alt={animeDetail.title.native}
            />
          </BannerImageWrap>
          <AnimeDetailWrap>
            <CoverImageWrap
              css={css({ border: `solid 5px ${animeDetail.coverImage.color}` })}
            >
              <img
                css={css({
                  '@media screen and (min-width: 1200px)': {
                    border: `solid 5px ${animeDetail.coverImage.color}`,
                  },
                })}
                src={animeDetail.coverImage.size.extraLarge}
                alt={animeDetail.title.native}
              />
            </CoverImageWrap>
            <GenresWrap>
              <span>
                <h1 css={css({ marginBottom: '5px' })}>
                  genres
                </h1>
                <span>
                  {animeDetail.genres.map((genre) => (
                    <p key={genre}>{genre}</p>
                  ))}
                  <RatingWrap>
                    <p>
                      ⭐️
                      <span css={css({ marginLeft: '10px' })}>
                        {animeDetail.averageScore}
                      </span>
                    </p>
                  </RatingWrap>
                </span>
              </span>
            </GenresWrap>
          </AnimeDetailWrap>
          <DescriptionWrap>
            <div css={css({ marginBottom: '10px' })}>
              <div css={css({
                display: 'flex',
                alignItems: 'center',
                marginBottom: '5px',
              })}
              >
                <h2>Title</h2>
                <ButtonAdd
                  type="button"
                  text="add to collection"
                  onClick={modalFormHandler}
                />
              </div>
              <TitleWrap>
                {titleKey.map((title) => (
                  <AnimeTitle
                    key={title}
                    title={title}
                    titleDescription={animeDetail.title[title]}
                  />
                ))}
              </TitleWrap>
            </div>
            <div>
              <h2>Description</h2>
              <p css={css({ textAlign: 'justify' })}>
                {animeDetail.description}
              </p>
            </div>
          </DescriptionWrap>
        </div>
      </ContentWrap>
    </>

  );
}
