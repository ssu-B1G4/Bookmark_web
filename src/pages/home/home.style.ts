import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const SearchWrapper = styled.div`
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 0px;
  width: 100%;
  z-index: 1;
`;

export const SearchBarWrapper = styled.div`
  padding: 0px 22px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0px 22px;
  overflow-x: auto;
  white-space: nowrap;
  gap: 8px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FilterBtn = styled.button`
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 6px 10px;
  background-color: white;
  border-radius: 16px;
`;

export const ReplyBtnWrapper = styled.div`
  pointer-events: none;
`;

export const MapWrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 0;
  box-sizing: border-box;
`;
