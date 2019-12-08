const express = require('express');
const homeController =  require('./homeController')
const router = express.Router();

router.post('/proses',homeController.prosesPost)



module.exports = router;