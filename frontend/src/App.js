// src/App.js

import './index';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import Searcher from './Components/Searcher';
import Examples from './Components/Examples';
import PlatformSelector from './Components/PlatformSelector';
import FacebookPreview from './Components/FacebookPreview';
import TwitterPreview from './Components/TwitterPreview';
import WhatsAppPreview from './Components/WhatsAppPreview';
import LinkedInPreview from './Components/LinkedInPreview';
import TelegramPreview from './Components/TelegramPreview';
import InstagramPreview from './Components/InstagramPreview';
import DiscordPreview from './Components/DiscordPreview';
import TamTamPreview from './Components/TamTamPreview';


function App () {
  const [search, setSearch] = useState('');
  const [activePlatform, setactivePlatform] = useState('');
  const [activeExample, setActiveExample] = useState('');
  const [metadata, setMetadata] = useState(null);

  const handleExampleClick = (url) => {
    setActiveExample(url);
    setSearch(url);
  }

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
    if (newSearch) {
      setActiveExample(newSearch);
    }
  }

  const handlePlatformClick = (platform) => {
    setactivePlatform(platform)
  }

  const handleFetchMetadata = (data) => {
    setMetadata(data);
  }

  return (
    <div className="App">

      {/* HEADER */}
      <header className='w-full'>
        <div className='w-full flex justify-end'>
          <button>
            <FontAwesomeIcon icon={faSun} className='m-2 p-2 text-2xl' />
          </button>
        </div>

        <Searcher search={search} onSearchChange={handleSearchChange} onFetchMetadata={handleFetchMetadata} />
      </header>



      {/* EJEMPLOS */}
      <Examples active={activeExample} handleActive={handleExampleClick} />


      {/* PLATAFORMAS */}
      <PlatformSelector active={activePlatform} handleActive={handlePlatformClick} metadata={metadata} />

      {/* PREVISUALIZACIÓN */}
      <div className='w-full flex justify-center items-center my-6'>
        {activePlatform === 'Facebook' && <FacebookPreview metadata={metadata} />}
        {activePlatform === 'Twitter' && <TwitterPreview metadata={metadata} />}
        {activePlatform === 'WhatsApp' && <WhatsAppPreview metadata={metadata} />}
        {activePlatform === 'LinkedIn' && <LinkedInPreview metadata={metadata} />}
        {activePlatform === 'Telegram' && <TelegramPreview metadata={metadata} />}
        {activePlatform === 'Instagram' && <InstagramPreview metadata={metadata} />}
        {activePlatform === 'Discord' && <DiscordPreview metadata={metadata} />}
        {activePlatform === 'TamTam' && <TamTamPreview metadata={metadata} />}
      </div>

    </div>


  );
}

export default App;
