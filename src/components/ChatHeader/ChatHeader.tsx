import { useNavigate } from 'react-router-dom';

import { BackButton, HeaderContainer, Title } from './ChatHeader.style';

interface ChatHeaderProps {
  title?: string;
}

export const ChatHeader = ({ title = '유저 네임' }: ChatHeaderProps) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <BackButton onClick={() => navigate(-1)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18L9 12L15 6"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </BackButton>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};
