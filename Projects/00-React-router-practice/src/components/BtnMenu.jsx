import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../assets/svg/logo.svg'

export function BtnMenu({ title, logo, link }) {
    return (
        <Link to={link}>
            <button className='w-36 h-36 flex flex-col items-center justify-center bg-gray-500 text-white rounded-md'>
                <img src={logo} className="logo react w-20" alt="React logo" />
                <span className='mt-2 text-md font-semibold'>{title}</span>
            </button>
        </Link>
    )
}
