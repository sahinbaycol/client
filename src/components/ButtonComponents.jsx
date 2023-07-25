import React, { useState } from 'react'
import ButtonWithIconComponent from './ButtonWithIconComponent'

function ButtonComponents({data,}) {

 
  
  return (
    <div className='contentbuttoncontainer' >
        
        <button value='All TaskS'  className='contentbutton1'>Asia </button>
        <button value='Completed'   className='contentbutton23'>Europe </button>
        <button value='In-Progress'  className='contentbutton23'>Africa </button>
        <button value='Pending'   className='contentbutton23'>South America</button>
        <button value='Pending'   className='contentbutton23'>North America</button>
        <button value='Pending'   className='contentbutton23'>Australia </button>
        <button value='Pending'   className='contentbutton4'>Antarctica</button>
    </div>
  )
}

export default ButtonComponents