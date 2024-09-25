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

const theme: DefaultTheme = {
  colors,
  commons,
};

export default theme;
