import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { Home } from './pages/home/home';
import { Mypage } from './pages/mypage/mypage';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
