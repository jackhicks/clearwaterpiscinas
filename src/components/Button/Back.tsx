import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const goBack = useNavigate();

  return (
    <>
      <button className="p-4" onClick={() => goBack(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#24549b"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>
    </>
  );
};
