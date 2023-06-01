import React, { useEffect } from 'react'
import { ButtonTheme } from './ButtonTheme'

export function Contend() {

    return (
        <main className='flex justify-center items-center h-screen bg-gray-200 dark:bg-slate-800'>
            <div className='border border-gray-500 w-5/6 max-w-md h-auto max-h-full p-4 bg-gray-300 dark:bg-slate-500'>
                <ButtonTheme/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi animi adipisci nobis ipsa magni. Porro quae ducimus libero natus, ratione asperiores nulla, quisquam temporibus delectus adipisci tenetur mollitia, quas dolores?
                </p>
            </div>
        </main>
    )
}
