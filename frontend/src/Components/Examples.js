// src/Components/Examples.js

import React from 'react';


function Examples ({ active, handleActive }) {
  const examples = [
    'https://www.marca.com',
    'https://www.facebook.com',
    'https://www.twitter.com',
  ];

  return (
    <div className='flex flex-col items-center justify-center mt-8'>
      <h2 className='font-bold'>O también puedes probar con estas:</h2>
      <div className='flex flex-col items-center justify-center sm:flex-row sm:mb-8'>
        {examples.map((url, index) => (

          <button
            key={index}
            onClick={() => handleActive(url)}
            className={`border border-black bg-white text-black p-2 rounded-full text-center my-2 transition-colors duration-200 ${active === url ? 'active' : ''} sm:m-2`}>
            <p>{url}</p>
          </button>
        ))}

      </div>
    </div>
  );



}

export default Examples;