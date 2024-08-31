// src/Components/FacebookPreview.js
import React from 'react';

function FacebookPreview ({ metadata }) {
  const { title, description, image, url } = metadata;

  return (
    <div className="w-11/12 p-4 border rounded-lg sm:w-9/12 md:w-1/2 lg:w-4/12">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />}
      <div className="mt-2">
        <h3 className="mt-2 font-bold">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
        <a href={url} className="text-blue-500 mt-2 inline-block">{url}</a>
      </div>
    </div>
  );
}

export default FacebookPreview;
