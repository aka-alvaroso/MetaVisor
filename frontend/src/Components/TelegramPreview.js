// src/Components/TelegramPreview.js
import React from 'react';

function TelegramPreview ({ metadata }) {
  const { title, description, image, url, publisher } = metadata;

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h2 className='font-bold text-lg mt-10'>Previsualización en Telegram Desktop</h2>
      <div className="w-11/12 p-4 border rounded-lg sm:w-9/12 md:w-1/2 lg:w-4/12">
        <a href={url} className="text-blue-500 mb-2 inline-block">{url}</a>
        <div className="flex bg-neutral-100 rounded-md border border-l-4 border-t-0 border-r-0 border-b-0 border-neutral-500">
          <div className='flex flex-col ml-2 w-9/12'>
            <p className="text-sm text-gray-400 mt-auto">{publisher}</p>
            <h3 className="font-bold truncate mt-1">{title}</h3>
            <p className="text-sm text-gray-700 truncate">{description}</p>
          </div>
          {image ? <img src={image} alt={title} className="w-20 h-20 object-cover rounded-md ml-4" /> : ''}
        </div>
      </div>

      <h2 className='font-bold text-lg mt-10'>Previsualización en Telegram Web</h2>

      <div className="w-11/12 p-4 border rounded-lg sm:w-9/12 md:w-1/2 lg:w-4/12">
        <a href={url} className="text-blue-500 mt-2 inline-block">{url}</a>
        <div className="mt-2 bg-neutral-100 rounded-md pl-2 border border-l-4 border-t-0 border-r-0 border-b-0 border-neutral-500">
          <p className="text-sm text-gray-400 mt-auto">{publisher}</p>
          <h3 className="mt-2 font-bold">{title}</h3>
          <p className="text-sm text-gray-700">{description}</p>
          {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />}
        </div>
      </div>
    </div >
  );
}

export default TelegramPreview;
