const bedrock = require('bedrock-protocol')

function connect() {
    const client = bedrock.createClient({
        host: 'MSuperCraft.aternos.me',
        port: 31849,
        username: 'Bot24_7'
    })

    client.on('join', () => {
        console.log('Bot Joined!')
    })

    client.on('disconnect', () => {
        console.log('Disconnected')
        setTimeout(connect, 5000)
    })

    client.on('error', (err) => {
        console.log(err)
    })
}

connect()
