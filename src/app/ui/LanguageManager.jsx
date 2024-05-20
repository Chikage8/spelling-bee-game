'use client'

import React, {useEffect, useState} from 'react'
import LanguageSelectDropdown from './LanguageSelectDropdown';
// import { ReactComponent as DownArrow } from "../../../public/down-arrow.svg";
import Image from 'next/image'

const LanguageManager = (props) => {
  const [isSelectingLanguage, setIsSelectingLanguage] = useState(false);
  // const [displayLanguage, setDisplayLanguage] = useState(props.clientLanguage);

  // useEffect(()=>{
  //   props.clientLanguage === "en-US" ? setDisplayLanguage("EN") : setDisplayLanguage(props.clientLanguage)
  // }, [])

  return (
    <div>
    {!props.isGameOver &&
    <div>
        <div className='flex flex-row gap-1'>
            <p>{props.clientLanguage} </p> 
          <Image
            onClick={()=>{setIsSelectingLanguage(!isSelectingLanguage)}}
            src="/down-arrow.svg"
            width={15}
            height={15}
            alt='Down arrow'
          />
        </div>
      {isSelectingLanguage && <LanguageSelectDropdown setIsSelectingLanguage={setIsSelectingLanguage} clientLanguage={props.clientLanguage} childSetClientLanguage={props.childSetClientLanguage}/>}
    </div>
  }</div>
  )
}

export default LanguageManager