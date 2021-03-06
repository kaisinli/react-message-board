const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;

const createApp = () => {
    // logging middleware
    app.use(morgan('dev'))

    // body parsing middleware
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    // static file-serving middleware
    app.use(express.static(path.join(__dirname, '..', 'public')))

        // any remaining requests with an extension (.js, .css, etc.) send 404
        .use((req, res, next) => {
            if (path.extname(req.path).length) {
                const err = new Error('Not found')
                err.status = 404
                next(err)
            } else {
                next()
            }
        })

    // sends index.html
    app.use('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public/index.html'))
    })

    // error handling endware
    app.use((err, req, res, next) => {
        console.error(err)
        console.error(err.stack)
        res.status(err.status || 500).send(err.message || 'Internal server error.')
    })

    app.listen(port, () => console.log(`Listening on ${port}`))
}

createApp()
