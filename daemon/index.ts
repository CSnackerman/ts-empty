import express from 'express'
import 'reflect-metadata'

import helloLoggerMiddleware from 'Server/middleware/LoggerMiddleware'
import helloRouter from 'Server/router'

const port = process.env.PORT || 3000
const server = express()

server.get('/apiTest', (req, res) => {
    res.json({
        success: 'nice',
        code: 54321,
        middleware: helloLoggerMiddleware(),
        router: helloRouter(),
        extra: 'hi'
    })
})

server.listen(port, () => {
    console.log('Server running @ http://localhost:3000/apiTest')
})