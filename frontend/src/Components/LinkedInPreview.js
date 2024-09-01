// src/Components/LinkedInPreview.js
import React from 'react';

function LinkedInPreview ({ metadata }) {
  const { title, image, url, publisher } = metadata;

  return (
    <a href={url} className='w-full flex flex-col justify-center items-center'>

      <h2 className='font-bold text-lg mt-10 text-center'>Previsualización en LinkedInd</h2>

      <div className="w-11/12 p-4 border rounded-lg sm:w-9/12 md:w-1/2 lg:w-4/12">
        <div className="flex rounded-md">
          {image ? <img src={image} alt={title} className="w-2/6 h-20 object-cover rounded-md" /> : <img src='whatsapp_image_not_found.png' alt={title} className="w-20 h-20 object-cover rounded-md" />}
          <div className='flex flex-col justify-center ml-2 w-4/6'>
            <h3 className="font-medium truncate mt-1">{title}</h3>
            <p className="text-sm text-gray-400">{publisher}</p>
          </div>
        </div>
      </div >
    </a>


  );
}

export default LinkedInPreview;
