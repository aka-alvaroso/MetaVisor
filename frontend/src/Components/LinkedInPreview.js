// src/Components/LinkedInPreview.js
import React from 'react';

function LinkedInPreview ({ metadata }) {
  const { title, description, image, url } = metadata;

  return (
    <div className="linkedin-preview p-4 border rounded-lg bg-white shadow-md">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />}
      <div className="mt-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
        <a href={url} className="text-blue-500 hover:underline">{url}</a>
      </div>
    </div>
  );
}

export default LinkedInPreview;
