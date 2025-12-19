import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import openai from '../utils/openai';

const GptSearchBar = () => {

  const searchText = useRef(null);

  const selectedLang = useSelector((store)=> store.language.selectedLanguage);  

  const handleGptSearchClick = async () => {
  if (!searchText.current.value) return;

  const prompt = `
Recommend exactly 5 movies based on this input:
"${searchText.current.value}"

Rules:
- Only movie names
- No explanations
- No numbering
- Output MUST be a valid JSON array of strings
`;

  try {
    const response = await openai.responses.create({     //yha se data fetch kr rha ahai
      model: "gpt-5-nano",     // cheap + fast
      input: prompt,
    });

    // 🔥 Safely extract text
    const resultText = response.output_text;
    const movies = JSON.parse(resultText);    //yha par humne JSON.parse kiya kyunki humne prompt me bola tha ki output ek valid JSON array hona chahiye

    console.log("Recommended Movies:", movies);
    // Example: ["Inception", "Tenet", "Looper", "Source Code", "Predestination"]

  } catch (error) {
    console.error("GPT Error:", error);
  }
};



 
  return (
    <div className='pt-24 flex items-center justify-center'>
        <form onSubmit={(e)=> e.preventDefault()} className='bg-black bg-gradient-to-tr from-black rounded-lg p-2 flex items-center border-2 border-white border-solid'>
            <input ref={searchText} type="text" placeholder={lang[selectedLang].gptSearchPlaceholder} className='h-12 bg-black text-white rounded-lg mx-4 px-3 w-96' />
            <button
           onClick={handleGptSearchClick}
            className="bg-red-600 px-4 h-12 py-2 rounded-lg text-white mt-2"
          >
            {lang[selectedLang].search}
          </button>
        </form>
    </div>
  )
}

export default GptSearchBar;
