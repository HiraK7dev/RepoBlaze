import React from 'react'
import Icon from '../assets/icon.png'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

function Navbar() {

    useEffect(() => {
        themeChange(false)
    }, [])

  return (
    <>
    <div className="navbar bg-primary text-primary-content fixed z-20">
        <div className='navbar-start'>
            <button className="btn btn-ghost text-xl"><img src={Icon} className='h-10'/><h1 className='font-mono'>RepoBlaze</h1></button>
        </div>
        <div className='navbar-center font-mono font-bold w-96'>
            <NavLink to="/" className={({isActive}) => isActive ? `w-2/6 bg-slate-500 bg-opacity-40 text-center` : `w-2/6 text-center`}>&lt;Home /&gt;</NavLink>
                <div className='w-16'></div>
            <NavLink to="/create" className={({isActive}) => isActive ? `w-2/6 bg-slate-500 bg-opacity-40 text-center` : `w-2/6 text-center`}>&lt;Create /&gt;</NavLink>
                <div className='w-16'></div>
            <NavLink to="/playground" className={({isActive}) => isActive ? `w-2/6 bg-slate-500 bg-opacity-40 text-center` : `w-2/6 text-center`}>&lt;Play /&gt;</NavLink>
        </div>
        <div className='navbar-end'>
        <select className='text-xs font-mono w-24 bg-slate-300 bg-opacity-0 rounded-3xl p-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' data-choose-theme>
            <option value="forest">Dark</option>
            <option value="pastel">Light</option>
        </select>
        </div>
    </div>
    <div className='h-[64px] w-full'></div>
    </>
  )
}

export default Navbar