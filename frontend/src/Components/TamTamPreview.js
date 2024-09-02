// src/Components/TamTamPreview.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons'

function TamTamPreview ({ metadata }) {
  // const { title, image, url, publisher, description } = metadata;

  return (
    <div className="w-11/12 h-60 p-4 border rounded-lg sm:w-9/12 md:w-1/2 lg:w-4/12 bg-neutral-200 shadow-md flex items-center justify-center text-3xl text-neutral-500" >
      <FontAwesomeIcon icon={faEyeSlash} />
    </div>
  );
}

export default TamTamPreview;
