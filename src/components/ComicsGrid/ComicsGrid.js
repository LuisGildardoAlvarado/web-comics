import React from 'react'
import './ComicsGrid.css'

export default function ComicsGrid( { characters }) {
  return (

    <div className='characters-container'>
      {characters.map((item, index) => (
        <div key={index} className='characters'>
          <a href='/'>
            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name} />
            <h1> {item.name} </h1>
          </a>
        </div>
      ))}
    </div>
  );
}
