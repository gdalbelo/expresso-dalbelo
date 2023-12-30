const router = require('express').Router();
require('../db/mongoConnecrion');

const frete = require('./frete');

router.get('/', (req, res) => {
    res.json({
        success: false,
        message: 'Please, do not call /api, it is for our server'
    });
});

router.use('/frete', frete);

module.exports = router;