/* eslint-disable react/require-default-props */
import React, { FormEvent, useRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

type props = {
  setModalForm: (callback:(prev: object) => any) => any,
  handlerData: (payload: any) => any
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
  padding: '30px',
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
      transform: 'translateY(0.25rem)',
    },
    ':active': {
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
    ':active': {
      transform: 'translateY(0.25rem)',
    },
  },
  input: {
    transition: 'all 0.3s ease',
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    ':active': {
      transform: 'translateY(0.25rem)',
    },
  },
});

function CollectionForm({ setModalForm, handlerData }:props) {
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
            <input type="submit" />
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

export default function CollectionFormModal({ setModalForm, handlerData }:props) {
  return (
    <>
      {createPortal(<CollectionForm handlerData={handlerData} setModalForm={setModalForm} />, (document.getElementById('modal-form')!))}
    </>
  );
}
