'use client';

import ImagePreview from '@/components/ImagePreview';
import FileInput from '@/components/ui/FileInput';
import React, { ChangeEvent, useEffect, useState } from 'react';

const ClassifyHerb = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [resultText, setResultText] = useState('');

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setImage(URL.createObjectURL(file));
    setisLoading(true);

    // Create a FormData instance to package the file for upload
    const formData = new FormData();
    formData.append('image', file);

    // Send a POST request to your API endpoint

    try {
      const response = await fetch('/api/classify', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const responseText = await response.text();
        setResultText(responseText);
      } else {
        alert(`Error: ${response.statusText}`);
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    if (image === '') {
      setResultText('');
    }
  }, [image]);

  return (
    <div className="flex justify-center items-center flex-col w-full lg:p-0 p-4 sm:mb-28 mb-0">
      <h1 className="text-6xl font-bold">Classify your herb</h1>
      {resultText && (
        <span className="text-2xl mt-10 ">
          it is a{' '}
          <strong className="font-semibold text-green-500">{resultText}</strong>
        </span>
      )}
      <div className="max-w-6xl w-full flex gap-6 mt-10">
        <div className="mx-auto">
          {image ? (
            <ImagePreview
              src={image}
              setImage={setImage}
              isLoading={isLoading}
            />
          ) : (
            <FileInput id="image" name="herb" onChange={handleChange} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassifyHerb;
