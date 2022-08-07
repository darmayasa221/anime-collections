import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './pages/Templates/Header';
import AnimeDetailPage from './pages/Animes/AnimeDetailPage';

export default function Controller() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/animes/:id" element={<AnimeDetailPage />} />
        </Routes>
      </main>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
          }
          #root {
            display: flex;
            min-height: 100vh;
            flex-direction: column;
          }
          main {
            position: relative;
            padding: 32px;
            flex: 1;
          }
        `}
      />
    </>
  );
}
