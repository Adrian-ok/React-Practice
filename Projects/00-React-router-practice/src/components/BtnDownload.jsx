import React from 'react'

export function BtnDownload() {

    const download = () => {

    }

    return (
        <button
            onclick={download}
            className='bg-red-600 p-1 rounded-md border-black-400 border-2 font-semibold'
        >
            Descargar Img
        </button>
    )
}
