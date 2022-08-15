/* eslint-disable react/require-default-props */
import styled from '@emotion/styled';
import { FormEvent } from 'react';

type props = {
  className?: string;
  text: string,
  onClick?() :void
  type: 'button'| 'reset' | 'submit'
}
const ButtonUI = styled('button')({
  cursor: 'pointer',
  background: 'white',
  position: 'absolute',
  right: 0,
  border: 'black 1px solid',
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
  className, text, onClick, type,
}: props) {
  const onClickHandler = (event: FormEvent) => {
    event.preventDefault();
    if (onClick !== undefined) {
      onClick();
    }
  };
  return (
    <ButtonUI
      type={type}
      className={className}
      onClick={onClickHandler}
    >
      <span>
        {text}
      </span>
    </ButtonUI>
  );
}
