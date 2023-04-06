import React from 'react'
import IonIcon from '@reacticons/ionicons';

const Footer = () => {
  return (
    <div className='bg-dark' style={{color:'white', padding: 50}}>
      <h4 style={{fontWeight: 'bold'}}>Copyright © 2023. All rights are reserved</h4>
    <a href='https://github.com/Papa-Regar'>
    <IonIcon name="logo-github" size='large'/>
    </a>

    <a href='https://www.linkedin.com/in/sufian-rahim-351b8a153/'>
    <IonIcon name="logo-linkedin" size='large'/>
    </a>

    </div>
  )
}

export default Footer
