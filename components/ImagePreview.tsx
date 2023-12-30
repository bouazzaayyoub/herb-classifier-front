import React from 'react';

interface ImagePreviewProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  setImage: Function;
  isLoading?: boolean;
}

const ImagePreview = ({
  src,
  setImage,
  isLoading = false,
}: ImagePreviewProps) => {
  return (
    <div className="relative max-h-max flex flex-col items-center justify-center w-full p-1 my-3 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700  dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mb-3">
      <button
        className="absolute z-[1] -top-4 -right-4 h-8 w-8 border rounded-full bg-gray-50 hover:bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
        aria-label="close"
        onClick={() => setImage('')}
      >
        <svg
          width={24}
          height={24}
          className=" m-auto"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isLoading && (
        <div className="absolute z-10 bg-gray-100 p-3 w-full h-full items-center justify-center flex space-x-2 animate-pulse">
          <div aria-label="Loading..." role="status">
            <svg
              className="animate-spin w-10 h-10 fill-slate-800"
              viewBox="3 3 18 18"
            >
              <path
                className="opacity-20"
                d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
              ></path>
              <path d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
            </svg>
          </div>
        </div>
      )}
      <img
        src={src || ''}
        alt=""
        className="relative max-h-52 rounded-lg shadow-lg"
      />
    </div>
  );
};

export default ImagePreview;
