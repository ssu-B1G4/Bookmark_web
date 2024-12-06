import { Spinner, Dot } from './LoadingSpinner.style';

export const LoadingSpinner = () => {
  return (
    <Spinner>
      {[...Array(8)].map((_, i) => (
        <Dot key={i} $index={i} />
      ))}
    </Spinner>
  );
};
