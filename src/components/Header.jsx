import React from 'react'
import profileImage from '../assests/profile.png'

const header = () => {
  return (
    <div>
      <div className='headerContainer'>
        
      <div className='userContainer'>
          <div className='userName'>
            Rolan Pereira
          </div>
          
          <div className='userImage'>  
            <img src={profileImage} alt="" />
          </div>
      </div>
        
      </div>
    </div>
  )
}

export default header