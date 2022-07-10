import React from 'react'
import './ComicsGrid.css'

// https://gateway.marvel.com:443/v1/public/characters?apikey=4e549e334c3e5cb74f80641abf022896
// public key:  4e549e334c3e5cb74f80641abf022896
//private key:  d21dcbbf3ea4757a1c2143fd2c94411305054e82
//ts: 1
// 1d21dcbbf3ea4757a1c2143fd2c94411305054e824e549e334c3e5cb74f80641abf022896

// hash: 7e001fdd1ecb39e3ebf36a919eddf5dc
// https://gateway.marvel.com/v1/public/characters?ts=1&apikey=4e549e334c3e5cb74f80641abf022896&hash=7e001fdd1ecb39e3ebf36a919eddf5dc

export default function ComicsGrid( { characters }) {
  return (

    <div className='characters-container'>
      {characters.map((item, index) => (
        <div key={index} className='characters'>
          <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name} />
          <h1> {item.name} </h1>
        </div>
      ))}
    </div>
  );
}
