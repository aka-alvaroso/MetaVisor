// src/Components/TelegramPreview.js
import React from 'react';

function TelegramPreview ({ metadata }) {
  const { title, description, image, url } = metadata;

  return (
    <div className="telegram-preview p-4 border rounded-lg bg-white shadow-md">
      {image && <img src={image} alt={title} className="w-full h-32 object-cover rounded-md" />}
      <div className="mt-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
        <a href={url} className="text-blue-500 hover:underline">{url}</a>
      </div>
    </div>
  );
}

export default TelegramPreview;
