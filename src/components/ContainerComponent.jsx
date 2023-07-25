import React from 'react'
import ContentComponent from './ContentComponent'
import SideBarContainer from './SideBarContainer'

function ContainerComponent({data,}) {
  return (
    <div className='container'>
        
        <ContentComponent data={data} />
    </div>
  )
}

export default ContainerComponent