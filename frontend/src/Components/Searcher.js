// src/Components/Searcher.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'


function Searcher ({ search, onSearchChange, onFetchMetadata }) {
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/metadata?url=${encodeURIComponent(search)}`);
      const metadata = await response.json();
      onFetchMetadata(metadata);
    } catch (error) {
      console.error('Error fetching metadata:', error);
    } finally {
      setLoading(false);
    }

  }


  return (
    <div className="w-full flex justify-center items-center mt-10 md:mx-auto lg:w-9/12">
      <form onSubmit={handleSubmit} className='w-4/5'>

        <input
          type="text"
          placeholder="Introduce una URL..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className='w-3/5 border border-black rounded-l-full text-s p-2 focus:outline-none sm:w-4/5'
        />
        {/* <button className='w-2/5 border border-black rounded-r-full text-s text-white bg-black p-2 sm:w-1/5'>
          <FontAwesomeIcon icon={faWandMagicSparkles} /> Generar
        </button> */}

        <button className='w-2/5 border border-black rounded-r-full text-s text-white bg-black p-2 sm:w-1/5' disabled={loading}>
          {loading ? 'Cargando...' : <><FontAwesomeIcon icon={faWandMagicSparkles} /> Generar</>}
        </button>

      </form>
    </div>
  );

}

export default Searcher;