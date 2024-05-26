import { io } from 'socket.io-client'

const App = () => {
  const socket = io('http://localhost:3000')
  socket.on('connect', (response) => {
    console.log(response)
  })

  return <main className=''></main>
}

export default App
