import React from 'react'



function ProfileCardComponent() {
  return (
    <button className='profilecardbutton'>
        <div className='profilecardcontainer'>
            <img className='pp' src="sahin.jpeg" alt="" />
            <div className='ppcardmiddle'>
                <p className='ppcardmiddletext1'>Şahin Bayçöl</p>
                <p className='ppcardmiddletext2'>sahin.bycool@gmail.com</p>
            </div>
            <img className='profilecardimg' src="https://cdn-icons-png.flaticon.com/128/10826/10826552.png" alt="" />
        </div>
    </button>
  )
}

export default ProfileCardComponent