// components/RetryErrorBoundary.tsx
import { ErrorBoundary } from "react-error-boundary";

export default function RetryErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      fallbackRender={({ resetErrorBoundary }) => (
        <div>
          <p>문제가 발생했습니다</p>
          <p>페이지를 불러오는데 실패했습니다.</p>
          <button onClick={resetErrorBoundary}>다시 불러오기</button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
}
