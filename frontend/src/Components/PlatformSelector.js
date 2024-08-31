// src/Components/PlarformSelector.js
function PlatformSelector ({ active, handleActive, metadata }) {

  const platforms = [
    'WhatsApp',
    'Telegram',
    'Facebook',
    'Instagram',
    'Twitter',
    'LinkedIn',
    'Discord',
    'TamTam'
  ]

  return (
    <div className={`w-full p-1 bg-zinc-200 text-zinc-500 flex items-center justify-center flex-wrap mt-2 md:rounded-full md:m-auto md:w-5/6 lg:w-4/6 xl:w-3/6 ${metadata ? '' : 'hidden'}`}>

      {platforms.map((platform, index) => (

        <button
          key={index}
          onClick={() => handleActive(platform)}
          className={`m-1 p-2 transition-color duration-200 ${active === platform ? 'selected' : ''} md:m-auto`}>
          {platform}
        </button>

      ))}
    </div>
  );

}


export default PlatformSelector;