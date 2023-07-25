import React from 'react'
import SideBarBottomComponent from './SideBarBottomComponent'
import SideBarComponent from './SideBarComponent'
function SideBarContainer() {
  return (
    <div className='sidebarContainer'>
        <SideBarComponent />
        <SideBarBottomComponent />
    </div>
  )
}

export default SideBarContainer