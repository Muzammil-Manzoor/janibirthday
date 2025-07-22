// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CountdownPage from './components/CountdownPage';
import MainPage from './components/MainPage';
import NotFound from './components/NotFound';
import MemoriesPage from './components/MemoriesPage';
import MemoryPage from './components/MemoryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CountdownPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/memories" element={<MemoryPage/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
