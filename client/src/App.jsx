/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Input from './components/input'

const App = () => {
  const [score, setScore] = useState({})
  const socket = io('localhost:3000')

  function connectSocket() {
    socket.on('connection', (socket) => {
      console.log(socket)
    })
  }

  function handleInput(event) {
    let { name, value } = event.target
    let currentObj = { [name]: value }

    setScore((prev) => ({ ...prev, ...currentObj }))
  }

  function sendScores() {
    socket.emit('scores', score)
  }

  useEffect(() => {
    connectSocket()
  }, [])
  return (
    <div className='w-full h-screen flex items-center justify-center text-white bg-zinc-800'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-3xl font-medium mb-5'>
          React Multiplayer Dashboard
        </h1>
        <Input
          name='name'
          handleInput={handleInput}
          placeholder='Enter your name'
        />
        <Input
          name='score'
          handleInput={handleInput}
          placeholder='Enter your Score'
        />
        <button
          className='mt-[0.5rem] bg-black text-white px-5 py-2 rounded hover:bg-zinc-900 transition-all duration-300 ease-in-out'
          onClick={sendScores}
        >
          Publish Score
        </button>
      </div>
    </div>
  )
}

export default App
