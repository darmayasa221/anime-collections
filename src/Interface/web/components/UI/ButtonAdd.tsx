/* eslint-disable react/require-default-props */
import styled from '@emotion/styled';
import { FormEvent } from 'react';
import { iAnimed } from '../../../../Domains/animes/entities/Anime';

type props = {
  text: string,
  anime:iAnimed,
  handlerData?(data: iAnimed) :void
}
const ButtotWrap = styled('div')({
  position: 'absolute',
  right: 0,
  backgroundColor: 'white',
  padding: '10px',
  borderRadius: '4px',
  transition: 'all 0.2s',
  ':hover': {
    transform: 'scale(1.1)',
    transition: 'all 0.2s',
  },
});
export default function Button({ text, anime, handlerData }: props) {
  const onClickHandler = (event: FormEvent) => {
    event.preventDefault();
    if (handlerData !== undefined) {
      handlerData(anime);
    }
  };
  return (
    <ButtotWrap onClick={onClickHandler}>
      <span>
        add to collection
      </span>
    </ButtotWrap>
  );
}
