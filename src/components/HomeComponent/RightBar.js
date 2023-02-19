import React from 'react'
import './RightBar.css'
const ICON = require('./images/searchIcon.png')

export default function RightBar({onChangeSearchFor, searchFor, onClickSearchFor, clearSearch}) {
  return (
    <div className='d-flex flex-column RightBarMain'>
        <div className='d-flex align-items-center search-button'>
            <img src = {ICON} alt = 'search icon' style={{width: '20px', height: '20px'}} className = {'mx-4'}></img>
            <input onKeyDown={onClickSearchFor} value={searchFor} onChange={onChangeSearchFor}  className='Input' placeholder='Search for Topic' style = {{border: 'none', outline: 'none', backgroundColor: 'transparent'}}></input>
        </div>

        <button onClick={clearSearch} className='Clear-Button'>Clear</button>
    </div>
  )
}
