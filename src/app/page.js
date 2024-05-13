import Image from "next/image";
import { english_dictionary, turkish_dictionary } from "./lib/dictonaries";
import React from 'react';
import Hexagon from './ui/Hexagon';

export default function Home() {

  let yedi_haneli_kelimeler = []
  turkish_dictionary[7].map((yedi_haneli) => {
    yedi_haneli_kelimeler.push(<p>{yedi_haneli}</p>)
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* {yedi_haneli_kelimeler} */}
        <Hexagon>
          <p>A</p>
        </Hexagon>
    </main>
  );
}
