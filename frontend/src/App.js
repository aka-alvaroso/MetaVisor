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
import ModalBtn from './Components/ModalBtn';
import MetadataModal from './Components/MetadataModal';

function App () {
  const [search, setSearch] = useState('');
  const [activePlatform, setactivePlatform] = useState('WhatsApp');
  const [activeExample, setActiveExample] = useState('');
  const [metadata, setMetadata] = useState({
    title: 'Preview Simulator - Preview, edit and generate',
    description: 'You can preview any url in different social media, you can also edit this data to your liking!',
    image: 'https://images.unsplash.com/photo-1724764147764-3eb2a66cdf11?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: 'https://www.previewsimulator.com/',
    publisher: 'Preview Simulator'
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExampleClick = (url) => {
    setActiveExample(url);
    setSearch(url);
    fetchMetadata(url);
  }

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
    if (newSearch) {
      setActiveExample(newSearch);
      fetchMetadata(newSearch);
    }
  }

  const fetchMetadata = async (url) => {
    try {
      const response = await fetch(`/api/get-metadata?url=${encodeURIComponent(url)}`);
      const data = await response.json();
      setMetadata(data);
    } catch (error) {
      console.error('Error fetching metadata:', error);
    }
  };

  const handlePlatformClick = (platform) => {
    setactivePlatform(platform)
  }

  const handleFetchMetadata = (data) => {
    setMetadata(data);
  }

  const handleModalOpen = () => {
    setIsModalOpen(true);
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
  }

  const handleSaveMetadata = (newMetadata) => {
    setMetadata(newMetadata);
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

        <h1 className='text-center text-4xl font-bold'>MetaVisor</h1>

        <Searcher search={search} onSearchChange={handleSearchChange} onFetchMetadata={handleFetchMetadata} />
      </header>

      {/* EJEMPLOS */}
      <Examples active={activeExample} handleActive={handleExampleClick} />

      {/* PLATAFORMAS */}
      {metadata ? <PlatformSelector active={activePlatform} handleActive={handlePlatformClick} /> : ''}

      {/* BOTÓN MODAL */}
      <ModalBtn metadata={metadata} openModal={handleModalOpen} />

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

      {/* MODAL DE METADATOS */}
      <MetadataModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        metadata={metadata}
        onSave={handleSaveMetadata}
      />


    </div>
  );
}

export default App;