import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

import UnoCSS from 'unocss/vite'


export default defineConfig({

  base: "/memorycards/",

  plugins: [

    UnoCSS({

      shortcuts:[  

        {h1:'backdrop-blur text-center text-10 font-800 c-blue-600 p-2'},
        {mycontainer: 'bg-gradient-to-b from-rose-100 to-sky-600 w-full min-h-full absolute top-0 left-0'},
        {mybtn: 'btn bg-rose-400 text-white rd hover:bg-rose-600 p-2'},
        {s4: 'bg-green-200 p-1 text-center w-[11vw] h-[11vw] text-[5vw] flex items-center justify-center'},
        {s8: 'bg-gray-200 p-1 text-center w-[6vw] h-[6vw] text-[2vw] flex items-center justify-center'},
      ],

    }),

    react(),]})