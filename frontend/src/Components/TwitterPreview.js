// src/Components/TwitterPreview.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'

function TwitterPreview ({ metadata }) {
  const { title, description, image, url, publisher } = metadata;

  return (
    <div className='w-full flex flex-col justify-center items-center'>

      {/* <div className='w-11/12 p-2 rounded-lg bg-amber-100 mt-4 sm:w-9/12 md:w-1/2 lg:w-4/12'>
        <p><span className='font-bold'>Info:</span> Para que se muestre la previsualiación en WhatsApp, esta se debe cargar antes de enviar el mensaje.</p>
      </div> */}

      <h2 className='font-bold text-lg mt-10 text-center'>Previsualización en Twitter</h2>

      <a href={url} className="w-11/12 border rounded-lg flex sm:w-9/12 md:w-1/2 lg:w-4/12">
        {image ? <img src={image} alt={title} className="w-4/12 h-24 object-cover rounded-md sm:w-3/12" /> : <div className="w-4/12 sm:w-3/12 h-24 bg-neutral-200 flex items-center text-2xl text-neutral-500 justify-center rounded-md"><FontAwesomeIcon icon={faNewspaper} /></div>}
        <div className="w-8/12 sm:w-9/12 flex flex-col justify-center p-2 bg-neutral-100 rounded-md">
          <p className="text-sm text-gray-400">{publisher}</p>
          <h3 className="w-11/12 font-bold truncate">{title}</h3>
          <p className="w-11/12 text-sm text-gray-700 truncate">{description ? description : 'No description.'}</p>
        </div>
      </a >


      <h2 className='font-bold text-lg mt-10 text-center'>Previsualización de vídeo de YouTube en Twitter</h2>
      <a href={url} className="w-11/12 p-4 border rounded-lg sm:w-9/12 md:w-1/2 lg:w-4/12 bg-white shadow-md" >
        <p className="text-sm text-gray-600">{publisher ? publisher : url}</p>
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-md"
          />
        ) : <div className="w-full h-48 bg-neutral-100 rounded-md"></div>
        }
        <div className="mt-2">
          <h3 className="font-bold text-lg text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>

        </div>
      </a>


    </div >
  );
}

export default TwitterPreview;
