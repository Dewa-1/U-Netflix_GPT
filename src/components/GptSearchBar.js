import React from 'react'
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';

const GptSearchBar = () => {

  const selectedLang = useSelector((store)=> store.language.selectedLanguage);  
  return (
    <div className='pt-24 flex items-center justify-center'>
        <form className='bg-black bg-gradient-to-tr from-black rounded-lg p-2 flex items-center border-2 border-white border-solid'>
            <input type="text" placeholder={lang[selectedLang].gptSearchPlaceholder} className='h-12 bg-black text-white rounded-lg mx-4 px-3 w-96' />
            <button
          
            className="bg-red-600 px-4 h-12 py-2 rounded-lg text-white mt-2"
          >
            {lang[selectedLang].search}
          </button>
        </form>
    </div>
  )
}

export default GptSearchBar;
