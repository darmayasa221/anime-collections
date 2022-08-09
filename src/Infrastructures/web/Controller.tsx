import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';
import AnimePage from './pages/Anime/AnimePage';
import Header from './pages/Template/Header';
import AnimeDetailPage from './pages/Anime/AnimeDetailPage';

export default function Controller() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AnimePage />} />
          <Route path="/animes/:id" element={<AnimeDetailPage />} />
        </Routes>
      </main>
      <Global
        styles={{
          '*': {
            margin: 0,
            padding: 0,
          },
          '#root': {
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
          },
          main: {
            position: 'relative',
            padding: '32px',
            flex: 1,
          },
        }}
      />
    </>
  );
}
