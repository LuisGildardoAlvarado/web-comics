import React from 'react'
import './Header.css'
import { FiSearch } from "react-icons/fi";

export default function Header( {brand} ) {
  return (
        <header>
            <div className='header-nav'>
                <div className='container-logo'>
                    <a href='/'> <h1>{brand}</h1> </a>
                </div>

                <div className='container-search'>
                    <input type="text" className='search-input' placeholder='Search...' />
                    <button className='search-button'>
                    <a href='null'> <FiSearch/> </a>
                    </button>
                    
                </div>

            </div>
        </header>
  )
}
