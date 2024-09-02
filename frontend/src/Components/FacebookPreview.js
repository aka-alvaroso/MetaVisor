import React from 'react';

function FacebookPreview ({ metadata }) {
  const { title, description, image, url, publisher } = metadata;

  return (
    <div className="w-full flex flex-col justify-center items-center">

      <h2 className='font-bold text-lg mt-10 text-center'>Previsualización en Facebook Feed</h2>
      <a href={url} className="w-11/12 p-4 border rounded-lg sm:w-9/12 md:w-1/2 lg:w-4/12 bg-white shadow-md" >
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-md"
          />
        ) : <div className="w-full h-48 bg-neutral-100 rounded-md"></div>
        }
        <div className="mt-2">
          <p className="text-sm text-gray-600">{publisher ? publisher : url}</p>
          <h3 className="font-bold text-lg text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>

        </div>
      </a>

    </div>
  );
}

export default FacebookPreview;
