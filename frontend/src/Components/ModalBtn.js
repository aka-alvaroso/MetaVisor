// src/Components/ModalBtn.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'


function ModalBtn ({ metadata, openModal }) {

  return (
    <div className='flex flex-col items-center justify-center sm:flex-row sm:mb-8'>

      <button
        onClick={openModal}
        className={`border border-black bg-white text-black p-2 rounded-full text-center my-2 transition-colors duration-200 ${metadata ? '' : 'hidden'} sm:m-2 transition-colors duration-200 hover:bg-black hover:text-white`}>
        <p><FontAwesomeIcon icon={faPenToSquare} /> Editar Metadatos</p>
      </button>

    </div>
  );



}

export default ModalBtn;