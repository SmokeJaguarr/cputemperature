const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const exphbs = require('express-handlebars')
const { spawn } = require('child_process')

const app = express()

// Load config
dotenv.config( { path: './config/config.env' })
const PORT = process.env.PORT || 3000

// Set up Handelbars
app.engine( '.hbs', exphbs({ extname: '.hbs'}));
app.set('view engine', '.hbs');

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', require('./routes/index'))
app.get('/api/cputem', require('./routes/index'))

app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
