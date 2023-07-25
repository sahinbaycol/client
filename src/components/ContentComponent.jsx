import React from 'react'

import GreetingComponent from './GreetingComponent'
import CardContainer from './CardContainer'

function ContentComponent({data,bgPic}) {
  return (
    <div className='contentContainer'>
        
        
        <CardContainer data={data}  bgPic={bgPic} />
    </div>
  )
}

export default ContentComponent