const express = require('express')
const router = express.Router()
const { spawn } = require('child_process')

//const si = require('systeminformation');


// @desc Index/Landing page
// @route GET /
router.get('/', (req, res) => {
    res.render('index', {
        layout: 'index'
    })
  })

router.get('/api/cputem', async (req, res) => {
  const childPython = spawn('python3', ['temperature.py']);
  childPython.stdout.on('data', (data) => {
    res.send(data)
  })
  })

  module.exports = router
