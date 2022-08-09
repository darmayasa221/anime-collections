import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { iAnimedDetail } from '../../../../Domains/animes/entities/AnimeDetail';
import AnimeTitle from './AnimeTitle';

type props = {
  animeDetail: iAnimedDetail;
};
const AnimeDetailWrap = styled('div')({
  maxHeight: '1200px',
  '@media screen and (min-width: 1200px)': {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    '> div:nth-of-type(1)': {
      top: 0,
      position: 'absolute',
      width: '1200px',
    },
  },
});
const BannerImageWrap = styled('div')({
  position: 'absolute',
  right: 0,
  top: 0,
  img: {
    width: '100%',
  },
});
const CoverImageWrap = styled('div')({
  position: 'relative',
  height: '40vh',
  img: {
    height: '90%',
    width: '50%',
    position: 'absolute',
  },
  '@media screen and (min-width: 650px)': {
    height: '45vh',
    marginTop: '10%',
    img: {
      height: '95%',
    },
  },
  '@media screen and (min-width: 850px)': {
    marginBottom: '20px',
    height: '50vh',
    img: {
      height: '100%',
    },
  },
  '@media screen and (min-width: 1000px)': {
    marginBottom: '20px',
    height: '55vh',
    img: {
      height: '100%',
    },
  },
  '@media screen and (min-width: 1200px)': {
    marginBottom: '20px',
    maxHeight: '560px',
    img: {
      maxHeight: '560px',
      marginLeft: '20px',
    },
  },
});
const GenresWrap = styled('div')({
  display: 'grid',
  position: 'absolute',
  gridTemplateColumns: 'repeat(2, 1fr)',
  width: '100%',
  height: '30vh',
  paddingTop: '30%',
  gridColumnGap: '40px',
  '@media screen and (min-width: 650px)': {
    paddingTop: '25%',
    gridColumnGap: '60px',
    'span:nth-of-type(2)': {
      paddingTop: '25px',
      paddingLeft: '20px',
    },
    h1: {
      marginBottom: '10px',
      fontSize: '30px',
    },
    p: {
      fontSize: '20px',
    },
  },
});
const RatingWrap = styled('div')({
  backgroundColor: 'black',
  width: '40%',
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
export default function AnimeDetail({ animeDetail }: props) {
  const titleKey = Object.keys(animeDetail.title);
  return (
    <AnimeDetailWrap>
      <div>
        <BannerImageWrap>
          <img
            css={css`
              width: 100%;
            `}
            src={animeDetail.bannerImage}
            alt={animeDetail.title.native}
          />
        </BannerImageWrap>
        <CoverImageWrap>
          <img
            css={css`
              border: solid 5px ${animeDetail.coverImage.color};
            `}
            src={animeDetail.coverImage.size.extraLarge}
            alt={animeDetail.title.native}
          />
          <GenresWrap>
            <span />
            <span
              css={css`
                padding-top: 10px;
              `}
            >
              <h1
                css={css`
                  margin-bottom: 5px;
                `}
              >
                genres
              </h1>
              <span>
                {animeDetail.genres.map((genre) => (
                  <p key={genre}>{genre}</p>
                ))}
                <RatingWrap>
                  <p>
                    ⭐️
                    <span
                      css={css`
                        margin-left: 10px;
                      `}
                    >
                      {animeDetail.averageScore}
                    </span>
                  </p>
                </RatingWrap>
              </span>
            </span>
          </GenresWrap>
        </CoverImageWrap>
        <DescriptionWrap>
          <div
            css={css`
              margin-bottom: 10px;
            `}
          >
            <h2>Title</h2>
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
            <p
              css={css`
                text-align: justify;
              `}
            >
              {animeDetail.description}
            </p>
          </div>
        </DescriptionWrap>
      </div>
    </AnimeDetailWrap>
  );
}
