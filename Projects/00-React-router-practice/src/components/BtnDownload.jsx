import React from 'react'
import { useState } from 'react'

export function BtnDownload({ codimg }) {

  const download = async () => {

    const url = `https://cofra.com.ar/sistemas/api-php/controls.php?cod=${codimg}`

    const response = await fetch(url)
    const data = await response.json()

    downl(data)

    // const link = document.createElement('a');
    // link.href = '';
    // link.download = 'imagen.jpg';
    // link.target = '_blank'; // Opcional: abre la imagen en una nueva pestaña

    // link.click();
  }

  const downl = (e) => {
    e.map(item => {
      const link = document.createElement('a');
      link.href = `https://cofra.com.ar/sistemas/api-php/${item.imagen}`;
      link.download = 'imagen.jpg';
      link.target = '_blank'; 
      link.click();
    })
  }

  return (
    <button
      onClick={download}
      className='bg-red-600 p-1 rounded-md border-black-400 border-2 font-semibold'
    >
      Descargar Img
    </button>
  )
}
