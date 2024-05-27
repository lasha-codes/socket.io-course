import { useState } from 'react'
import io from 'socket.io-client'

const App = () => {
  const [formInputs, setFormInputs] = useState({})
  const [crudData, setCrudData] = useState([])
  console.log(crudData)
  const socket = io('localhost:3000')
  const handleInput = (event) => {
    const { name, value } = event.target

    let obj = { [name]: value }

    setFormInputs((prev) => ({ ...prev, ...obj }))
  }

  const handleSubmit = () => {
    socket.emit('data', formInputs)

    socket.on('crudData', (data) => {
      setCrudData(data)
    })
  }

  return (
    <div className='w-full h-screen flex items-center justify-center bg-zinc-800 text-white'>
      <div className='flex flex-col items-center gap-10'>
        <h1 className='font-medium text-4xl'>Crud operations</h1>
        <div className='flex flex-col gap-3 items-center'>
          <input
            onChange={handleInput}
            name='name'
            placeholder='Enter your name'
            className='py-1 rounded pl-[1rem] w-[15rem] bg-zinc-700 border-white outline-none'
          />
          <input
            onChange={handleInput}
            name='age'
            placeholder='Enter your age'
            className='py-1 rounded pl-[1rem] w-[15rem] bg-zinc-700 border-white outline-none'
          />
          <input
            onChange={handleInput}
            name='phone'
            placeholder='Enter your Phone Number'
            className='py-1 rounded pl-[1rem] w-[15rem] bg-zinc-700 border-white outline-none'
          />

          <button
            onClick={handleSubmit}
            className='bg-black hover:opacity-70 px-5 py-1 rounded-md transition-all duration-300 ease-in-out'
          >
            Add Data
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
