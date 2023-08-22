const ws = require('ws')

wss = new ws.Server({
    port: 4000
}, () => console.log('Server start 4000'))

let cash = {}

wss.on('connection', function connection(ws) {
    ws.on('message', function (message) {
        message = JSON.parse(message)
        switch (message.event) {
            case 'message':
                broadcasMessage(message)
                if (wss.clients.size >= 1) {
                    cash = message
                }
                break;
            case 'connection':
                cash ? broadcasMessage(cash) : broadcasMessage(message)
                break;
        }
    })
})

function broadcasMessage(message) {
    wss.clients.forEach(client => {
        client.send(JSON.stringify(message))
    })
}
