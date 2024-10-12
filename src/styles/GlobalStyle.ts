import { createGlobalStyle, css } from 'styled-components';

export const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  button,
  video {
    margin: 0;
    padding: 0;
    border: 0;

    /* font-size: 62.5%; */
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }

  *[hidden] {
    display: none;
  }

  html {
    /* background: ${({ theme }) => theme.colors.white};
    min-height: 100dvh;
    height: 100%; */
  }

  #root {
    background: ${({ theme }) => theme.colors.gradationBG};
    min-height: 100dvh;
    height: 100%;
  }

  body {
    line-height: 1;
  }

  menu,
  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    border: none;

    background: transparent;

    cursor: pointer;
  }
`;
const GlobalStyle = createGlobalStyle`
${reset}

#root, body, html {
    max-width: 43rem;
    margin: 0 auto;
    -ms-overflow-style: none; 
    scrollbar-width: none; 
}

#root::-webkit-scrollbar {
    display: none; 
}

* {
    box-sizing: border-box;
}

a{
  text-decoration: none;
}

input, textarea,button {
    border-radius: 0;
    appearance: none;
}`;

export default GlobalStyle;
