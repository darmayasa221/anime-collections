/* eslint-disable react/require-default-props */
import styled from '@emotion/styled';
import { FormEvent } from 'react';
import { iAnimed } from '../../../../Domains/animes/entities/Anime';

type props = {
  className?: string;
  text: string,
  anime:iAnimed,
  handlerData?(data: iAnimed) :void
}
const ButtotWrap = styled('div')({
  cursor: 'pointer',
  background: 'white',
  position: 'absolute',
  right: 0,
  borderColor: 'rgb(209 213 219)',
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  borderRadius: '0.25rem',
  padding: '10px',
  transition: 'all 0.2s',
  ':hover': {
    transform: 'scale(1.1)',
    transition: 'all 0.2s',
  },
});
export default function Button({
  className, text, anime, handlerData,
}: props) {
  const onClickHandler = (event: FormEvent) => {
    event.preventDefault();
    if (handlerData !== undefined) {
      handlerData(anime);
    }
  };
  return (
    <ButtotWrap className={className} onClick={onClickHandler}>
      <span>
        add to collection
      </span>
    </ButtotWrap>
  );
}
