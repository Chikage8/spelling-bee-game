import Image from "next/image";
import { english_dictionary, turkish_dictionary } from "./lib/dictonaries";
import React from 'react';
import Hive from './ui/Hive';
import './styles/global.css';

export default function Home() {
  let yedi_haneli_kelimeler = []
  turkish_dictionary[7].map((yedi_haneli) => {
    yedi_haneli_kelimeler.push(<p>{yedi_haneli}</p>)
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* {yedi_haneli_kelimeler} */}
        <Hive letters={['a', 'b', 'c', 'd', 'e', 'f', 'g']}></Hive>
    </main>
  );
}
