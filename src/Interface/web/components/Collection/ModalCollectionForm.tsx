import React, { FormEvent, useRef } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

type props = {
  setModalForm: (callback: (prev: object) => any) => any;
  handlerData: (payload: any) => any;
}
const CollectionFormWrap = styled('div')({
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
const collectionForm = css({
  borderColor: 'rgb(209 213 219)',
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  borderRadius: '0.25rem',
  padding: '20px',
  margin: '10px',
  width: '40vh',
  height: '30vh',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
});
const InputWrap = styled('div')({
  display: 'flex',
  label: {
    height: '10vh',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  h2: {
    paddingBottom: '10px',
    fontWeight: 'normal',
  },
  input: {
    height: '100%',
    padding: '5px',
    borderColor: 'rgb(209 213 219)',
    transitionDuration: '300ms',
    borderRadius: '0.25rem',
    ':hover': {
      boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      transform: 'translateY(-0.25rem)',
    },
    ':focus': {
      boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      transform: 'translateY(-0.25rem)',
    },
  },
});
const ButtonWrap = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridColumnGap: '10px',
  width: '50%',

  a: {
    margin: 'auto 0',
    textDecoration: 'none',
    color: 'black',
    transition: 'all 0.2s',
    ':hover': {
      transform: 'scale(1.1)',
      transition: 'all 0.2s',
    },
  },
});

const ButtonUI = styled('button')({
  cursor: 'pointer',
  background: 'white',
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
export default function ModalCollectionForm({ setModalForm, handlerData }:props) {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = nameInputRef.current?.value;
    handlerData(enteredText);
    setModalForm((prev) => ({
      ...prev,
      visible: false,
      handler: true,
    }));
  };

  return (
    <CollectionFormWrap>
      <form css={collectionForm} onSubmit={onSubmitHandler}>
        <h1>Create Collection</h1>
        <InputWrap>
          <label htmlFor="nameCollection">
            <h2>Collection Name</h2>
            <input type="text" id="nameCollection" placeholder="input collection name" ref={nameInputRef} />
          </label>
        </InputWrap>
        <div css={css({
          display: 'flex', width: '100%', justifyContent: 'center', height: '4vh',
        })}
        >
          <ButtonWrap>
            <ButtonUI type="submit">
              Submit
            </ButtonUI>
            <Link
              to="/collection"
              onClick={
              () => {
                setModalForm(() => false);
              }
            }
            >
              Back?
            </Link>
          </ButtonWrap>
        </div>
      </form>
    </CollectionFormWrap>
  );
}
