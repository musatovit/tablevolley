const express = require('express')
const cors = require('cors')
const events = require('events')

const emitter = new events.EventEmitter()

const PORT = 4000;

const app = express()

app.use(cors())
app.use(express.json());

app.get('/get-messages', (req, res) => {
    emitter.once('newMessage', (data) => {
        console.log(data)
        res.json(data)
    })
})

app.post('/new-messages', (req, res) => {
    const data = req.body
    emitter.emit('newMessage', data)
    res.status(200)
})

app.listen(PORT, () => console.log('server run'))
