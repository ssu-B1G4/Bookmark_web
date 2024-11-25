export const ErrorFallback = () => (
  <div>
    <h2>앱에 문제가 발생했습니다</h2>
    <button onClick={() => window.location.reload()}>새로고침</button>
  </div>
);
