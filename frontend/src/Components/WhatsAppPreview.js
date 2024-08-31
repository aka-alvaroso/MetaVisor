// src/Components/WhatsAppPreview.js
import React from 'react';

function WhatsAppPreview ({ metadata }) {
  const { title, description, image, url, publisher } = metadata;

  return (
    <div className='w-full flex flex-col justify-center items-center'>

      <div className='w-11/12 p-2 rounded-lg bg-amber-100 mt-4 sm:w-9/12 md:w-1/2 lg:w-4/12'>
        <p><span className='font-bold'>Info:</span> Para que se muestre la previsualiación en WhatsApp, esta se debe cargar antes de enviar el mensaje.</p>
      </div>

      <h2 className='font-bold text-lg mt-10'>Previsualización en WhatsApp Desktop</h2>

      <div className="w-11/12 p-4 border rounded-lg sm:w-9/12 md:w-1/2 lg:w-4/12">
        <div className="flex bg-neutral-100 rounded-md">
          {image ? <img src={image} alt={title} className="w-20 h-20 object-cover rounded-md" /> : <img src='whatsapp_image_not_found.png' alt={title} className="w-20 h-20 object-cover rounded-md" />}
          <div className='flex flex-col w-80 ml-2'>
            <h3 className="font-bold truncate mt-1">{title}</h3>
            <p className="w-11/12 text-sm text-gray-700 truncate">{description}</p>
            <p className="text-sm text-gray-400 mt-auto">{publisher}</p>
          </div>
        </div>
        <a href={url} className="text-blue-500 mt-2 inline-block">{url}</a>
      </div>

      <h2 className='font-bold text-lg mt-10'>Previsualización en WhatsApp Web</h2>

      <div className="w-11/12 p-4 border rounded-lg sm:w-9/12 md:w-1/2 lg:w-4/12">
        {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />}
        <div className="mt-2 bg-neutral-100">
          <h3 className="mt-2 font-bold">{title}</h3>
          <p className="text-sm text-gray-700">{description}</p>
          <p className="text-sm text-gray-400 mt-auto">{publisher}</p>
        </div>
        <a href={url} className="text-blue-500 mt-2 inline-block">{url}</a>
      </div>


    </div>
  );
}

export default WhatsAppPreview;
