import { lazy, Suspense, useEffect } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getEnvironment } from '@webviewkit/environment';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import './App.css';
import { BottomNav } from './components/BottomNav/BottomNav';
import { api } from './service/TokenService';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/Theme';

const Home = lazy(() => import('./pages/home/home').then((module) => ({ default: module.Home })));
const Mypage = lazy(() =>
  import('./pages/mypage/mypage').then((module) => ({ default: module.Mypage }))
);
const ChatPage = lazy(() =>
  import('./pages/ChatPage/ChatPage').then((module) => ({ default: module.ChatPage }))
);
const PlacePage = lazy(() =>
  import('./pages/PlacePage/PlacePage').then((module) => ({ default: module.PlacePage }))
);
const MyPlacePage = lazy(() =>
  import('./pages/MyPlacePage/MyPlacePage').then((module) => ({ default: module.MyPlacePage }))
);
const ReviewPage = lazy(() =>
  import('./pages/ReviewPage/ReviewPage').then((module) => ({ default: module.ReviewPage }))
);
const BookSearchPage = lazy(() =>
  import('./pages/BookSearchPage/BookSearchPage').then((module) => ({
    default: module.BookSearchPage,
  }))
);
const ReportPlacePage = lazy(() =>
  import('./pages/ReportPlacePage/ReportPlacePage').then((module) => ({
    default: module.ReportPlacePage,
  }))
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage/LoginPage').then((module) => ({ default: module.LoginPage }))
);
const Oauth = lazy(() =>
  import('./pages/LoginPage/Oauth').then((module) => ({ default: module.Oauth }))
);

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
    const publicPaths = ['/login', '/callback'];
    if (!api.isLoggedIn() && !publicPaths.includes(location.pathname)) {
      navigate('/login', { replace: true });
    }
  }, [location.pathname, navigate]);

  const showNavbar = !isWebView && showNavbarPaths.includes(location.pathname);

  return (
    <Suspense>
      <AppWrapper $hasNavbar={showNavbar}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/chat/:placeId" element={<ChatPage />} />
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
    </Suspense>
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
