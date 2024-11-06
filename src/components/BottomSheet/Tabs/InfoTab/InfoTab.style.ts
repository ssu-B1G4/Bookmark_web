import styled from 'styled-components';

export const InfoContainer = styled.div`
  padding: 10px;
  margin-top: 10px;
`;

export const InfoMainText = styled.p`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.bold700};
  padding: 10px 0;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 24px;
  overflow: hidden;
  position: relative;
`;

export const InfoSection = styled.div`
  /* margin-bottom: 24px; */
`;

export const InfoItem = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

export const IconImage = styled.img`
  width: 20px;
  height: 20px;
`;

export const InfoContent = styled.div`
  flex: 1;
`;

export const InfoText = styled.p`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
`;

export const Label = styled.p`
  font-size: 1.4rem;
  color: #ff3636;
  font-weight: ${({ theme }) => theme.fonts.regular400};
`;

export const TimeTable = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 8px;
  font-size: 1.4rem;
  line-height: 1.6;
  margin-top: 8px;
`;

export const DayLabel = styled.p`
  color: #585858;
`;

export const TimeText = styled.p``;
