import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';
import AnimePage from './pages/Anime/AnimePage';
import Header from './pages/Template/Header';
import AnimeDetailPage from './pages/Anime/AnimeDetailPage';
import CollectionPage from './pages/Collection/CollectionPage';

export default function Controller() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AnimePage />} />
          <Route path="/animes/:id" element={<AnimeDetailPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="*" element={<p>not found</p>} />
        </Routes>
      </main>
      <Global
        styles={{
          '*': {
            margin: 0,
            padding: 0,
          },
          '#root': {
            // position: 'relative',
            // overflowX: 'hidden',
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
          },
          '#modal-form': {
            position: 'absolute',
            width: '100%',
            zIndex: 11,
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
