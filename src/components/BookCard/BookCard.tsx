import { Author, AuthorContainer, AuthorInfo, Card, Title } from './BookCard.style';

type BookCardProps = {
  title: string;
  author: string;
};

export const BookCard = ({ title, author }: BookCardProps) => {
  return (
    <Card>
      <Title>{title}</Title>
      <AuthorContainer>
        <Author>저자</Author>
        <AuthorInfo>{author}</AuthorInfo>
      </AuthorContainer>
    </Card>
  );
};
