import styled from 'styled-components';

export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MapContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const MapButton = styled.button`
  position: absolute;
  right: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27px;
  height: 27px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  z-index: 10;

  &:first-of-type {
    top: 136px;
  }

  &:last-of-type {
    top: 171px;
  }
`;

export const MyLocationMarker = styled.div`
  width: 15px;
  height: 15px;
  background-color: #ec0037;
  border: 2px solid white;
  border-radius: 50%;
  position: relative;
  box-shadow: 0px 0px 0px 5px rgba(236, 0, 55, 0.2);
`;
