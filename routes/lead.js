
const express = require('express')
const { createLead, getLead } = require('../controllers/lead')
const { protect, admin } = require('../middleware/auth')
const router = express.Router()

router.route('/create').post(createLead)
router.route('/get').get(getLead)

module.exports = router 