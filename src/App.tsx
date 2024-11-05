import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './App.css';
import { BookSearchPage } from './pages/BookSearchPage/BookSearchPage';
import { ChatPage } from './pages/ChatPage/ChatPage';
import { MyPlacePage } from './pages/MyPlacePage/MyPlacePage';
import { ReviewPage } from './pages/ReviewPage/ReviewPage';
import { Home } from './pages/home/home';
import { Mypage } from './pages/mypage/mypage';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/Theme';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/chatpage" element={<ChatPage />} />
            <Route path="/myplace" element={<MyPlacePage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/booksearch" element={<BookSearchPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};
