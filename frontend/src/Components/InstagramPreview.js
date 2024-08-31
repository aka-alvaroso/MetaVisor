// src/Components/InstagramPreview.js
import React from 'react';

function InstagramPreview ({ metadata }) {
  const { title, image, url } = metadata;

  return (
    <div className="instagram-preview p-4 border rounded-lg bg-white shadow-md">
      {image && <img src={image} alt={title} className="w-full h-32 object-cover rounded-md" />}
      <div className="mt-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <a href={url} className="text-blue-500 hover:underline">{url}</a>
      </div>
    </div>
  );
}

export default InstagramPreview;
