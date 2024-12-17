import styled from 'styled-components';

const SystemMessageWrapper = styled.div`
  text-align: center;
  margin: 1rem 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: 0.9rem;
`;

interface SystemMessageProps {
  text: string;
}

export const SystemMessage = ({ text }: SystemMessageProps) => {
  return <SystemMessageWrapper>{text}</SystemMessageWrapper>;
};
