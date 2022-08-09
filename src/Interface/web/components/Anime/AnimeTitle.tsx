/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

type props = {
  title: string;
  titleDescription: string;
};
export default function AnimeTitle({ title, titleDescription }: props) {
  return (
    <>
      <section>
        <p>{title}</p>
      </section>
      <section>
        <p>: {titleDescription}</p>
      </section>
    </>
  );
}
