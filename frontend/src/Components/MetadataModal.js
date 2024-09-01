// src/Components/MetadataModal.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'

function MetadataModal ({ isOpen, onClose, metadata, onSave }) {
  const [localMetadata, setLocalMetadata] = useState(metadata);

  useEffect(() => {
    // Actualizar el estado local cuando los metadatos cambian
    setLocalMetadata(metadata || {});
  }, [metadata]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalMetadata((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = () => {
    onSave(localMetadata);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-11/12 relative sm:w-3/4 md:w-4/6 lg:w-3/6 xl:w-1/3">
        {/* Botón de cierre */}
        <button onClick={onClose} className="absolute top-2 right-2 text-black text-xl font-bold">
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4">Editar Metadatos</h2>

        <label className="block mb-2">Título</label>
        <input
          type="text"
          name="title"
          value={localMetadata.title}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />

        <label className="block mb-2">Descripción</label>
        <textarea
          name="description"
          value={localMetadata.description}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />

        <label className="block mb-2">URL de la imagen</label>
        <input
          type="text"
          name="image"
          value={localMetadata.image}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />

        <label className="block mb-2">URL</label>
        <input
          type="text"
          name="url"
          value={localMetadata.url}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />

        {/* Botón para generar las previsualizaciones */}
        <button
          onClick={handleSubmit}
          className="w-full bg-white text-black border border-black border-2 p-2 rounded-full mt-4 transition-colors duration-200 hover:bg-black hover:text-white">
          <FontAwesomeIcon icon={faWandMagicSparkles} /> Generar
        </button>
      </div>
    </div>
  );
}

export default MetadataModal;