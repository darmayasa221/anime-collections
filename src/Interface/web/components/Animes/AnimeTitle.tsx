/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

type Props = {
  title: string;
  titleDescription: string;
};
export default function AnimeTitle({ title, titleDescription }: Props) {
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
