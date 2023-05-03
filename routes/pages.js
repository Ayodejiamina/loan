const router = require('express').Router()
const pagesController = require('../controllers/pages')
router.get('/',pagesController.index)
router.get('/dashboard',pagesController.dashboard)



module.exports = router