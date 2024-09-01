// src/Components/InstagramPreview.js
import React from 'react';

function InstagramPreview ({ metadata }) {
  const { title, description, image, url } = metadata;

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h2 className='font-bold text-lg mt-10 text-center'>Previsualización en Instagram</h2>
      <div className="w-11/12 border rounded-lg bg-white shadow-md sm:w-9/12 md:w-1/2 lg:w-4/12">
        {image && <img src={image} alt={title} className="w-full h-32 object-cover rounded-md" />}
        <div className="mt-2 mx-2">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-gray-700 truncate">{description}</p>

          <a href={url} className="text-blue-500 hover:underline">{url}</a>
        </div>
      </div>
    </div >
  );
}

export default InstagramPreview;
