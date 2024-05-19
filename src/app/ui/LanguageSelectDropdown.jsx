'use client'

import React, {useEffect, useState} from 'react'
import { supported_languages } from '../lib/dictonaries'
import { useRouter } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { refreshEN } from '../en/page';
import { refreshTR } from '../tr/page';

const LanguageSelectDropdown = (props) => {
  const router = useRouter();

  const [languageAlternatives, setLanguageAlternatives] = useState([])
  const handleLanguageChange = (e) => {
    console.log(e.target.innerHTML);
    props.setIsSelectingLanguage(false);
    props.childSetClientLanguage(e.target.innerHTML);
    const localeCode = e.target.innerHTML === "EN" ? "en-US" : e.target.innerHTML
    // revalidatePath(`/${e.target.innerHTML.toLocaleLowerCase(localeCode)}`)
    document.getElementById("input-text").value = "";
    let urlString = `/${e.target.innerHTML.toLocaleLowerCase(localeCode)}`;
    console.log(typeof urlString, "** ", urlString )
    // router.replace({ pathname: `/`, query: { u: "true" } });
    // router.push({ pathname: `/${e.target.innerHTML.toLocaleLowerCase(localeCode)}`, query: { u: "true" } });
    router.push(`/${e.target.innerHTML.toLocaleLowerCase(localeCode)}`);
    router.refresh();
    // if (e.target.innerHTML === "EN") {
    //   refreshEN();
    // } else if (e.target.innerHTML === "TR") {
    //   refreshTR();
    // }
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
},[props.clientLanguage])
  

  return (
    <div className='border border-black p-1 rounded-64' >
      {languageAlternatives}
    </div>
  )
}

export default LanguageSelectDropdown