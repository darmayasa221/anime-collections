import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { iAnimedDetail } from '../../../../Domains/animes/entities/AnimeDetail';
import AnimeTitle from './AnimeTitle';

type Props = {
  animeDetail: iAnimedDetail;
};

const BannerImageWrap = styled('div')`
  position: absolute;
  right: 0;
  top: 0;
`;

const CoverImageWrap = styled('div')`
  position: relative;
  height: 40vh;
  @media screen and (min-width: 650px) {
    height: 45vh;
    margin-top: 10%;
    img {
      height: 95%;
    }
  }
  @media screen and (min-width: 850px) {
    margin-bottom: 20px;
    height: 50vh;
    img {
      height: 100%;
    }
  }
  @media screen and (min-width: 1000px) {
    margin-bottom: 20px;
    height: 55vh;
    img {
      height: 100%;
    }
  @media screen and (min-width: 1200px) {
    margin-bottom: 20px;
    max-height: 560px;
    img {
      max-height: 560px;
      margin-left: 20px;
    }
  }
`;
const GenresWrap = styled('div')`
  display: grid;
  position: absolute;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 30vh;
  padding-top: 30%;
  grid-column-gap: 40px;
  @media screen and (min-width: 650px) {
    padding-top: 25%;
    grid-column-gap: 60px;
    span:nth-of-type(2)  {
      padding-top: 25px;
      padding-left: 20px
    }
    h1{
      margin-bottom: 10px;
      font-size: 30px;
    }
    height: 25vh;
      p {
      font-size: 20px;
    }
   
    & div{
      width: 20%;
      margin-top: 10px;
    }
  }
}`;

const RatingWrap = styled('div')`
  background-color: black;
  width: 40%;
  color: wheat;
  margin-top: 5px;
  padding: 2px;
`;
const DescriptionWrap = styled('div')`
  @media screen and (min-width: 650px) {
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 20px;
    }
  }
`;
const TitleWrap = styled('div')`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 10px;
`;

export default function AnimeDetail({ animeDetail }: Props) {
  const titleKey = Object.keys(animeDetail.title);
  return (
    <div
      css={css`
        @media screen and (min-width: 1200px) {
          display: flex;
          width: 100%;
          justify-content: center;
        }
      `}
    >
      <div
        css={css`
          @media screen and (min-width: 1200px) {
            top: 0;
            position: absolute;
            width: 1200px;
          }
        `}
      >
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
              height: 90%;
              width: 50%;
              position: absolute;
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
                      {animeDetail.rating}
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
    </div>
  );
}
