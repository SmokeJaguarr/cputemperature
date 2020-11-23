const express = require('express')
const router = express.Router()
const { spawn } = require('child_process')
const dotenv = require('dotenv')
dotenv.config( { path: './config/config.env' })

// @desc Index/Landing page
// @route GET /
router.get('/', (req, res) => {
    res.render('index', {
        layout: 'index'
    })
  })

router.get('/api/cputem', async (req, res) => {
  const childPython = spawn(`${process.env.PYTHON, ['temperature.py']);
  childPython.stdout.on('data', (data) => {
    res.send(data)
  })
  })

  module.exports = router
