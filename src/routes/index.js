const express = require('express');
const router = express.Router();
const v1ApiRoutes = require('./v1/index');

//whenever you get a route that starts with /v1 please map it to v1ApiRoutes
router.use('/v1',v1ApiRoutes);
module.exports = router;
