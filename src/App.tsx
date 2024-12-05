import { useEffect } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getEnvironment } from '@webviewkit/environment';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import './App.css';
import { BottomNav } from './components/BottomNav/BottomNav';
import { BookSearchPage } from './pages/BookSearchPage/BookSearchPage';
import { ChatPage } from './pages/ChatPage/ChatPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { Oauth } from './pages/LoginPage/Oauth';
import { MyPlacePage } from './pages/MyPlacePage/MyPlacePage';
import { PlacePage } from './pages/PlacePage/PlacePage';
import { ReportPlacePage } from './pages/ReportPlacePage/ReportPlacePage';
import { ReviewPage } from './pages/ReviewPage/ReviewPage';
import { Home } from './pages/home/home';
import { Mypage } from './pages/mypage/mypage';
import { api } from './service/TokenService';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/Theme';

const queryClient = new QueryClient();

const AppWrapper = styled.div<{ $hasNavbar: boolean }>`
  ${({ $hasNavbar }) =>
    $hasNavbar &&
    `
    // padding-bottom: 70px;
  `}
`;

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const showNavbarPaths = ['/', '/myplace', '/mypage'];

  const { isWebView } = getEnvironment(navigator.userAgent);

  useEffect(() => {
    if (!api.isLoggedIn() && location.pathname !== '/login' && location.pathname !== '/callback') {
      navigate('/login', { replace: true });
    }
  }, [location.pathname, navigate]);

  // console.log('Environment details:', {
  //   userAgent: navigator.userAgent,
  //   isWebView,
  //   currentPath: location.pathname,
  //   showNavbarPaths,

  // });

  const showNavbar = !isWebView && showNavbarPaths.includes(location.pathname);

  return (
    <AppWrapper $hasNavbar={showNavbar}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/chatpage" element={<ChatPage />} />
        <Route path="/place/:placeId" element={<PlacePage />} />
        <Route path="/myplace" element={<MyPlacePage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/booksearch" element={<BookSearchPage />} />
        <Route path="/reportplace" element={<ReportPlacePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/callback" element={<Oauth />} />
      </Routes>
      {showNavbar && <BottomNav />}
    </AppWrapper>
  );
};

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
