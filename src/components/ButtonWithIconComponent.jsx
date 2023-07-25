import React from 'react'

function ButtonWithIconComponent({text,src,textclass,imgclass,buttonclass}) {
  return (
    <div className='buttoncontainer'>
        <button className={buttonclass}>
            <img src={src} alt="" className={imgclass}/>
            <p className={textclass}>{text}</p>
        </button>
    </div>
  )
}

export default ButtonWithIconComponent