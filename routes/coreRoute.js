//Rutas para el modulo core
const express = require('express')
const router = express.Router()
const coreController = require('../controllers/coreController')

//api/core
router.post('/', coreController.addCore)
router.get('/', coreController.loadCore)

module.exports = router