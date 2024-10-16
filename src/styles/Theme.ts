import { css, DefaultTheme } from 'styled-components';

const colors = {
  green: '#198155',
  lightGreen: '#ECFCE5',
  gradation1: '#88BCA6',
  gradation2: '#B2D9BD',
  gradation3: '#CDE7D4',
  gradation4: '#DCECDF',
  gradation5: '#F1F9EE',
  gradationBG: '#F7F7F7',
  black: '#000000',
  semiBlack: '#131214',
  gray: '#6E6E6E',
  semiGray: '#72777A',
  white: '#ffffff',
};

const commons = {
  scrollbar: css`
    overflow-y: overlay;

    &::-webkit-scrollbar {
      width: 0.4rem;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background-color: ${({ theme }) => theme.colors.gray};
    }
  `,
};

const fonts = {
  thin100: css`
    font-family: 'Pretendard';
    font-weight: 100;
  `,
  extraLight200: css`
    font-family: 'Pretendard';
    font-weight: 200;
  `,
  light300: css`
    font-family: 'Pretendard';
    font-weight: 300;
  `,
  regular400: css`
    font-family: 'Pretendard';
    font-weight: 400;
  `,
  medium500: css`
    font-family: 'Pretendard';
    font-weight: 500;
  `,
  semiBold600: css`
    font-family: 'Pretendard';
    font-weight: 600;
  `,
  bold700: css`
    font-family: 'Pretendard';
    font-weight: 700;
  `,
  extraBold800: css`
    font-family: 'Pretendard';
    font-weight: 800;
  `,
  black900: css`
    font-family: 'Pretendard';
    font-weight: 900;
  `,
};

const theme: DefaultTheme = {
  colors,
  commons,
  fonts,
};

export default theme;
