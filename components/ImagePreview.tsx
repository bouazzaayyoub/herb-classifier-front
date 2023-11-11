import React from 'react';

interface ImagePreviewProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  setImage: Function;
}

const ImagePreview = ({ src, setImage }: ImagePreviewProps) => {
  return (
    <div className="relative max-h-max flex flex-col items-center justify-center w-full p-1 my-3 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700  dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mb-3">
      <button
        className="absolute z-10 -top-4 -right-4 h-8 w-8 border rounded-full bg-gray-50 hover:bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
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
      <img
        src={src || ''}
        alt=""
        className="relative max-h-52 rounded-lg shadow-lg"
      />
    </div>
  );
};

export default ImagePreview;
