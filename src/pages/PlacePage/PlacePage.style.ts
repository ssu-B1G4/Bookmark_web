import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 43rem;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  margin: 0 auto;
  background-color: white;
`;

export const BackButton = styled.button`
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(calc(-50% - 19rem));
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 50%;
`;
