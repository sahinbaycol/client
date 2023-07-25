import React from 'react'
import ButtonWithIconComponent from './ButtonWithIconComponent'
import ProfileCardComponent from './ProfileCardComponent'

function SideBarBottomComponent({text,  src}) {
  return (
    <div className='sidebarbottomcontainer'>
        <ButtonWithIconComponent src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB6CAMAAACssAzVAAAAYFBMVEUAAAD///++vr5QUFD19fX7+/tISEh3d3e6urrIyMimpqbn5+ezs7Pk5OSgoKCTk5MbGxvt7e3e3t5AQECsrKwsLCzV1dVgYGA6OjoUFBRubm5lZWWMjIzOzs4mJiYKCgrZFLOOAAAByklEQVRoge3b63KCMBAF4ISbIAoKirZiff+3rKIOFck6Qz2bGeec322/IUQLm11jpuW7OOZRHC2zYjfxL0xLGdk+61bNDdf2MctaBz7Yp8SJBpw8w2d6i4dXw6W+pjrB5c0obG2BhuvYIUd7sDx3wPiLzp3yEguHrsU+b+8QKs+csLUzqFwKcgmVF4K8gMqpIKdQORDkgDJlypQpU6ZMmTJlypQpU/54edUG7rrPu5IH7dfADTO4ek/2UJ11lRQx6Wt220YVPl/2bclX2rC1x9f7FZWugjVSolfI5dyl8iI3xtReYGv3YiUTmVasJyKTerrN1lZm/CgGn7VxF+mxiT3K/lZb/0v7mkb5H2SfVDyNQaY0vrbYXjrvQ6a6PBhEr3/u/em6E3zc6dsTcqEON/dnX+1b3fS9ATPVDf5wmPcjHTi+N9Vh8JZxajP8Jo+bwtF6sk1CMbX0EpTV8i8n/+r8+Ky3WMqUKVOmTJkyZcqUKVOm/Nmyv45if13U/jrH/XXL+5sQEKYiciwsFOLnYHl00qhbbPiMlesTvUHD5me8UpgPOxcA2Y3KKkNlY59ppQHC3dMEn8oVdyn+3uwI+7U5zH1S8zh5UvMXAOkheoKIhq4AAAAASUVORK5CYII="}  text={"Add New City"} buttonclass={"addtaskbutton"} imgclass={"addtaskimg"} textclass={"addtasktext"}/>
        <ProfileCardComponent />
    </div>
  )
}

export default SideBarBottomComponent