'use client'

import React, {useEffect, useState} from 'react'
import { supported_languages } from '../lib/dictonaries'

const LanguageSelectDropdown = (props) => {
  const [languageAlternatives, setLanguageAlternatives] = useState([])
  const handleLanguageChange = (e) => {
    console.log(e.target.innerHTML);
    props.setIsSelectingLanguage(false);
    props.childSetClientLanguage(e.target.innerHTML);
  }

  useEffect(()=>{
    supported_languages.map(language => {
      if (language !== props.clientLanguage) {
        // // If the language is not the current language
        // let new_language = language === 'en-US' ? "EN": language;
        // console.log(new_language)
        setLanguageAlternatives([...languageAlternatives, <p onClick={handleLanguageChange}>{language}</p>]);
      }
    })
},

  [props.clientLanguage])
  

  return (
    <div className='border border-black p-1 rounded-64' >
      {languageAlternatives}
    </div>
  )
}

export default LanguageSelectDropdown