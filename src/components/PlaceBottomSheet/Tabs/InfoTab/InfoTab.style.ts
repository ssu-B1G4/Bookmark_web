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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoText = styled.p`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
`;

export const Label = styled.p`
  margin-top: 2px;
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

export const ChartSection = styled.div`
  margin-top: 40px;
`;

export const ChartContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background: white;
`;
export const CongestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 16px 0;
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 10px;
  flex-direction: column;
`;

export const AlertSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  padding: 0 4px;
`;

export const AlertIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 2px;
`;

export const CongestionLevel = styled.span<{ $level: string }>`
  color: ${({ $level }) => {
    switch ($level) {
      case 'green':
        return '#198155';
      case 'yellow':
        return '#E5A923';
      case 'red':
        return '#FF6767';
      default:
        return '#000000';
    }
  }};
  font-weight: ${({ theme }) => theme.fonts.semiBold600};
  font-size: 2rem;
  margin: 0 4px;
`;

export const CongestionDescription = styled.p`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  margin: 0;
`;

export const WarnText = styled.p`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  margin: 0;
  color: #6e6e6e;
  line-height: 1.5;
  white-space: pre-line;
`;

export const SearchSection = styled.div`
  margin-top: 20px;
`;

export const SearchAlertSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  padding: 0 4px;
  margin-top: 16px;
`;
