import React from 'react'
import { useNavigate } from "react-router-dom"

const Nav = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-10 flex justify-around mt-10 '>
            <h1 onClick={() => navigate('/')} className='cursor-pointer bg-slate-800 p-1 text-white rounded-md'>home</h1>
            <h1 onClick={() => navigate('/archives')} className='cursor-pointer  bg-slate-800 p-1 text-white rounded-md'>archives</h1>
            <h1 onClick={() => navigate('/trash')} className='cursor-pointer  bg-slate-800 p-1 text-white rounded-md'>trash</h1>
        </div>
    )

}
export default Nav;
