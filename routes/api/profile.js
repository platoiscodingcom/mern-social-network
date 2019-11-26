const express = require('express');
const router = express.Router();


// @route     GET api/profle
// @desc      test route
// @access    public
router.get('/', (req, res) => res.send('Profle route'));

module.exports = router;