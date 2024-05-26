import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Input from './components/input'

const App = () => {
  const socket = io('localhost:3000')

  function connectSocket() {
    socket.on('connection', (socket) => {
      console.log(socket)
    })
  }

  useEffect(() => {
    connectSocket()
  }, [])
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-3xl font-medium mb-5'>
          React Multiplayer Dashboard
        </h1>
        <Input placeholder='Enter your name' />
        <Input placeholder='Enter your Score' />
      </div>
    </div>
  )
}

export default App
