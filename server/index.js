const { createServer } = require('http')
const { Server } = require('socket.io')

const httpServer = createServer()
const io = new Server(httpServer, {
  cors: { origin: 'http://localhost:5173' },
})

const crudData = []

io.on('connection', (socket) => {
  socket.on('data', (data) => {
    crudData.push(data)
    socket.emit('crudData', crudData)
  })
})

httpServer.listen(3000, () => {
  console.log('Server is connected')
})
