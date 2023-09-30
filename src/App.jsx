import './App.css'
import React from 'react'
import SideMenu from './side-menu'
import Details from './details'
import Chat from './chat-section'

function App() {

  return (
    <div className='flex w-screen'>
      <div className='w-1/4'>
        <SideMenu/>
      </div>
      <div className='w-1/2'>
        <Chat/>
      </div>
      <div className='w-1/4'>
        <Details/>
      </div>
    </div>
  )
}

export default React.memo(App)
